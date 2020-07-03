## Install npm packages to develop the addon locally

    rm -rf package-lock.json
    npm cache clear --force 
    npm install

## Add html files, background and content script 

    npm run compile
        
## Popup window (React scripts)

- Work on the popup window in `production` mode
    
        npm run build:popup

- Work on the popup window in `development` mode
    
        npm run build:popup:dev

## Dashboard window (React scripts)

- Work on the dashboard window in `production` mode
    
        npm run build:dashboard

- Work on the dashboard window in `development` mode
    
        npm run build:dashboard:dev

## Danger Count - blocked website based on danger count (React scripts)

- Work in `production` mode
    
        npm run build:dangercount

- Work in `development` mode
    
        npm run build:dangercount:dev

## Danger Url - blocked website based on danger url (React scripts)

- Work in `production` mode
    
        npm run build:dangerurl

- Work in `development` mode
    
        npm run build:dangerurl:dev

