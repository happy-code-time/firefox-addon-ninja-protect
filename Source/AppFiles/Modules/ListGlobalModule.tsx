import * as React from 'react';

import * as FileSaver from 'file-saver';

import { Link } from 'react-router-dom';

import LoadingAnimation from './LoadingAnimation';

import Pagination from './Pagination/Pagination';

import ModuleFullScreenLoadingMin from './ModuleFullScreenLoadingMin';

import NoDataList from './NoDataList';

import NoDataListSearch from './NoDataListSearch';

import ModuleLoading from './ModuleLoading';

import copyToClipBoard from '../Functions/copyToClipboard';

import getTranslations from '../../../Translations';

import getList from '../Functions/storage/getList';

import addItemToList from '../Functions/storage/addItemToList';

import removeItemFromList from '../Functions/storage/removeItemFromList';

import emptyStorage from '../Functions/storage/emptyStorage';

import addToStore from '../../Store/addToStore';

import getSecurityList from '../../AppFiles/Functions/getSecurityList';

import customKey from '../Functions/customKey';

interface ListGlobalModuleProps {
    storageName: string;
}
class ListGlobalModule extends React.Component<ListGlobalModuleProps> {

    public translations: {
        [key: string]: any
    };

    public state: {
        [key: string]: any
    };

    public Redirection: {
        [key: string]: any;
    };

    public storageName: string;

    public listReadable: string;

    public storageKey: string;

    public example: any;

    constructor(props) {
        super(props);
        this.changeList = this.changeList.bind(this);
        this.setInputValue = this.setInputValue.bind(this);
        this.setNewLocalStorageData = this.setNewLocalStorageData.bind(this);
        this.deleteAll = this.deleteAll.bind(this);

        this.state = {
            data: [],
            inputValue: '',
            messages: [],
            animationLoading: true,
            // export options
            jsonData: {},
            /**
             * Jsx data: current list
             */
            itemsPerSite: 15,
        };

        this.translations = getTranslations();
        this.storageName = this.props.storageName;
        this.listReadable = this.translations[this.storageName];
        this.storageKey = 'BLACKLIST';
        this.example = getSecurityList();
    }

    componentDidMount() {
        (async () => {
            let blacklistStorage = {
                [this.storageName]: await getList(this.storageName)
            }

            try {
                blacklistStorage = blacklistStorage[this.storageName] ? blacklistStorage[this.storageName] : [];

                this.setState({
                    data: blacklistStorage,
                    jsonData: blacklistStorage ? JSON.stringify({ [this.storageName]: blacklistStorage }) : '',
                    animationLoading: false
                });

            } catch (error) {
                this.setState({
                    animationLoading: false
                });
            }
        })();
    }

    setInputValue(e, action) {

        if (13 == e.keyCode || 13 == e.which) {
            this.changeList(e, action, e.target.value);
        }

        else if (27 == e.keyCode || 27 == e.which) {
            this.setState({
                inputValue: ''
            });
        }

        else {
            this.setState({
                inputValue: e.target.value
            });
        }
    }

    setNewLocalStorageData(newArray) {
        let blacklistStorage = sessionStorage.getItem(this.storageKey);
        let jsonData = this.state.jsonData;

        try {
            blacklistStorage = JSON.parse(blacklistStorage);
            blacklistStorage[this.storageName] = newArray;

            if (undefined !== blacklistStorage[this.storageName]) {
                jsonData = JSON.stringify({ [this.storageName]: blacklistStorage[this.storageName] });
            }

            localStorage.setItem(this.storageKey, JSON.stringify(blacklistStorage));
            this.setState({
                jsonData
            });

        } catch (error) {

        }
    }

    deleteAll() {
        this.setState({
            animationLoading: true
        }, async () => {
            const data = this.state.data;

            if (data && data.length) {
                await emptyStorage(this.storageName, []);
                addToStore(this.translations.emptyListDone, 0);

                this.setState({
                    data: [],
                    animationLoading: false
                });
            }
            else {
                this.setState({
                    animationLoading: false
                });
            }
        });
    }

    changeList(e: any, action: string, value: string) {
        this.setState({
            animationLoading: true
        }, async () => {
            let { data } = this.state;

            let response: { error: boolean, message: string, data: [] } = {
                error: false,
                message: '',
                data: []
            };

            if (!value.length) {
                addToStore(`Error while adding value to the current list ${this.listReadable}. Value cannot be an empty string`, -1);
                return this.setState({
                    animationLoading: false
                });
            }

            if ('remove' == action) {
                if (e.target && e.target.parentNode && e.target.parentNode.parentNode) {
                    e.target.parentNode.parentNode.classList.add('animation-back');
                }
            }

            if ('add' == action) {
                response = await addItemToList(this.storageName, value);
            }
            else {
                response = await removeItemFromList(this.storageName, value);
            }

            if (true == response.error) {
                addToStore(response.message, 1);

                return this.setState({
                    animationLoading: false
                });
            }

            addToStore(response.message, 0);

            if (response.data) {
                data = response.data;
            }

            this.setState({
                inputValue: '',
                data,
                animationLoading: false
            }, () => {
                this.setNewLocalStorageData(data);
            });
        });
    }

    setMessageCopyToClipBoard() {
        addToStore(this.translations.copiedToClipBoard, 0);
    }

    /**
     * Set default value, like after installation
     */
    resetToDefault() {
        this.setState({
            animationLoading: true
        }, () => {
            //@ts-ignore
            browser.runtime.sendMessage({
                action: 'set-list-hardcoded',
                list: this.storageName
            })
                .then(data => {
                    this.setState({
                        data,
                        animationLoading: false,
                    })
                })
                .catch(error => {
                    addToStore(error, -1);
                    this.setState({ animationLoading: false });
                });
        });
    }

    getData() {
        const { data } = this.state;
        const filtered = data;
        const newStructure = [];

        filtered.map((item: string) => {
            newStructure.push({
                name: item,
                copyToClipboardJsx: (
                    <i
                        className="fas fa-clipboard clipboard"
                        title={this.translations.action_title_copyToClipboard_single}
                        onClick={(e) => {
                            copyToClipBoard(e, item, document.documentElement.scrollTop);
                            this.setMessageCopyToClipBoard();
                        }
                        }
                    ></i>
                ),
                removeJsx: (
                    <i
                        title={this.translations.action_title_delete_single}
                        className="fas fa-trash-alt delete"
                        onClick={(e) => this.changeList(e, 'remove', item)}
                    >
                    </i>
                )
            });
        });


        return newStructure;
    }

    /**
     * 
     */
    inputOnChangeCallback(e) {

    }

    liOnClickCallback(e, object) {

    }

    saveToFileJson(event) {
        const self = this;
        event.persist();
        event.target.classList.add('copied-remove');

        setTimeout(() => {
            event.target.classList.remove('copied');
            event.target.classList.remove('copied-remove');

            if (this.state.jsonData) {
                try {
                    var blob = new Blob([JSON.stringify(this.state.jsonData)], { type: "application/json;charset=utf-8" });
                    FileSaver.saveAs(blob, `Protector-${self.storageName}.json`);
                } catch (error) {
                    addToStore(`Error while creating Blob file. Error message: ${error}.`, -1);
                }
            }
        }, 300);
    }

    render() {
        const { animationLoading, data } = this.state;

        return (
            <div className="Blacklist flex flex-column">
                {
                    animationLoading &&
                    <LoadingAnimation />
                }
                <h1 className="h1-title">
                    <Link className="single-link-to-list" to='security'>
                        <i className="fas fa-chevron-left"></i>
                    </Link>

                    {
                        `${this.translations[this.storageName]} ${data ? `(${data.length})` : ''}`
                    }
                </h1>
                <div className="actions">
                    <i
                        title='Export your custom list to json file'
                        onClick={(e) => { this.saveToFileJson(e) }}
                        className="fas fa-file-signature button-action icon-iframes"
                    >
                    </i>
                    <i
                        title={this.translations.restoreDefaultValue}
                        onClick={(e) => this.resetToDefault()}
                        className="far fa-registered button-action"
                    ></i>
                    <i
                        title={this.translations.action_title_deleteList}
                        onClick={(e) => { this.deleteAll() }}
                        className="far fa-trash-alt button-action delete-all"
                    ></i>
                </div>
                <div className="Examples flex flex-column">
                    {
                        this.example.map(obj => {
                            const { translated, img, name } = obj;

                            if (name == this.storageName) {
                                const jsx = this.translations[`${name}_html`];

                                return (
                                    <div key={customKey()} className="example">
                                        <h1 className="ff-title h1 text-center">
                                            {
                                                translated
                                            }
                                        </h1>
                                        {
                                            jsx
                                        }
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <h1 className="h1 ff-title">
                    {
                        this.translations.addNewEntryTitle
                    }
                </h1>
                <div className="input-holder">
                    <input
                        className="input"
                        type="text"
                        onKeyDownCapture={(e) => this.setInputValue(e, 'add')}
                        onChange={(e) => this.setInputValue(e, 'add')}
                        value={this.state.inputValue}
                        placeholder={this.translations.addPlaceholder}
                    />
                    <span
                        className="icon"
                        onClick={(e) => this.changeList(e, 'add', this.state.inputValue)}
                    >
                        ➕
                    </span>
                </div>
                <Pagination
                    /**
                     * data
                     */
                    data={this.getData()}
                    /**
                     * How many items display per page
                     */
                    itemsPerSite={this.state.itemsPerSite}
                    /**
                     * Display total available items
                     * passed to the module
                     */
                    displayTotal={false}
                    /**
                     * Prefix of the total elements
                     */
                    totalPrefix=''
                    /**
                     * Pages Information
                     */
                    displayPagesInfo={true}
                    paginationTextPrefix={this.translations.page}
                    paginationTextMiddle={this.translations.of}
                    /**
                     * How many sites display: 
                     * - before main page
                     * - after main page
                     */
                    paginationPagesToDisplay={3}
                    /**
                     * Display pagination pages
                     * if false then only the prev and next buttons are displayed
                     */
                    displayPaginationPages={true}
                    /**
                     * Align ul and pagination: 1, 2
                     */
                    alignPagination={1}
                    /**
                     * Align pagination items
                     * 1, 2, 3, 4, 5
                     */
                    alignPagesItems={2}
                    /**
                     * Keys to display from object
                     */
                    display={
                        [
                            'name', 'copyToClipboardJsx', 'removeJsx'
                        ]
                    }
                    env='prod'
                    /**
                     * Display loop index as first
                     * entry for each li element
                     */
                    displayCount={true}
                    /**
                     * Each new page should start with an: 1 
                     * or increment the counter for each page
                     */
                    resetCountOnEachPage={false}
                    /**
                     * Buttons JSX
                     */
                    previousButton=''
                    nextButton=''
                    /**
                     * Search input field
                     */
                    displaySearch={true}
                    searchPlaceholder={this.translations.searchPlaceholder}
                    searchIcon=''
                    searchSensisitve={false}
                    searchOnKeys={
                        [
                            'name'
                        ]
                    }
                    /**
                     * Search value on start
                     */
                    searchValue=''
                    searchOnKeyDown={true}
                    /**
                     * Search title
                     */
                    searchTitle={this.translations.search}
                    paginationTitle={this.translations.list}
                    /**
                     * No data message
                     */
                    fallbackMounting={<ModuleLoading />}
                    fallbackLoading={<ModuleFullScreenLoadingMin />}
                    fallbackLoadingTime={100}
                    fallbackNoData={<NoDataList />}
                    fallbackNoDataSearch={<NoDataListSearch />}
                    /**
                     * callbacks
                     */
                    inputOnChangeCallback={this.inputOnChangeCallback}
                    liOnClickCallback={this.liOnClickCallback}
                />
                <form style={{
                    display: 'none !important',
                    opacity: 0,
                    position: 'absolute',
                    width: 0,
                    height: 0,
                    overflow: 'hidden'
                }}>
                    <textarea
                        id="copy-to-clipboard"
                        value=''
                        readOnly={true}
                    />
                </form>
            </div>
        );
    }
}

export default ListGlobalModule;