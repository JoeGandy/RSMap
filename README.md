# RSMap
A rebuild of osrs map into a nice google map like format, hoping to get the power of the ingame map on to the web. I know some already exist but they lack the features I'm trying to add
## Contributing to the project
Clone the repo, ensure you gatsby client setup (`npm install -g gatsby`)  
Run `npm i` in the project root  
Run `npm run develop` the site will then be hosted locally at localhost:8000
Run `npm run build` to set up a production build, ideally this wouldn't be in the repo but im commiting it so i can have dumb servers that don't need to build the project and can just git pull

## About
Built on gatsby and react  

#### Planned features (To do before even releasing):
- ~All teleport locations~
- ~Click on boat locations to see where they go~
- ~Location searcher~
- ~Agility short cuts to show where they go and level needed~
- ~Dungeon maps (Pending last few)~
- ~Remember position on refresh~
- ~Share current position on map~
- ~Remember filters on refresh~
- Quest icon to show quest with basic info
- Monster Locator
- Convert coord clues to map coordinates
- Region highlighting (Area locked ironmen, multi combat)

#### Issues to fix before going live
- ~Going in dungeons above a certain Y axis pans to above the dungeon~
- Waterbirth dungeon
- Quest cave under gnome stronhold (no idea of name)
- Other godwars layers
- Double check troll stronghold shortcuts
- Double check Arandar Shorcuts
- Log balance over Karamja river, what level?
- Kourend Slayer dungeon

#### Goal features
- Farm patch info
- Stores to show what they sell w/ quanitities 
- Clue scroll locations
- Remember filters on refresh (inside deungons)
- Remember position on refresh (inside dungeons)
- Show quickest route through dungeons
