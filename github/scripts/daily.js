const fs = require('fs');
const allTools = [
  {"id":"synthesia","name":"Synthesia AI","tagline":"AI Video Avatar #1","price":"$22/mo","commission":"$75 per sale","link":"https://synthesia.io?via=rmw","category":"Video"},
  {"id":"murfai","name":"Murf AI","tagline":"AI Voiceover Studio","price":"$19/mo","commission":"$60 per sale","link":"https://murf.ai?via=rmw","category":"Audio"},
  {"id":"writesonic","name":"Writesonic AI","tagline":"AI Writer + SEO","price":"$16/mo","commission":"$50 per sale","link":"https://writesonic.com?via=rmw","category":"Writing"},
  {"id":"elevenlabs","name":"ElevenLabs AI","tagline":"Realistic AI Voice","price":"$22/mo","commission":"$80 per sale","link":"https://elevenlabs.io?via=rmw","category":"Audio"},
  {"id":"runway","name":"Runway ML","tagline":"AI Video Magic","price":"$15/mo","commission":"$45 per sale","link":"https://runwayml.com?via=rmw","category":"Video"},
  {"id":"leonardo","name":"Leonardo AI","tagline":"AI Art Generator Pro","price":"$10/mo","commission":"$40 per sale","link":"https://leonardo.ai?via=rmw","category":"Image"},
  {"id":"framer","name":"Framer AI","tagline":"Build Website with AI","price":"$20/mo","commission":"$70 per sale","link":"https://framer.com?via=rmw","category":"Website"},
  {"id":"durable","name":"Durable AI","tagline":"Website in 30 Sec","price":"$15/mo","commission":"$60 per sale","link":"https://durable.co?via=rmw","category":"Website"},
  {"id":"10web","name":"10Web AI","tagline":"AI WordPress Builder","price":"$10/mo","commission":"$55 per sale","link":"https://10web.io?via=rmw","category":"Website"},
  {"id":"fliki","name":"Fliki AI","tagline":"Text to Video Voice","price":"$21/mo","commission":"$50 per sale","link":"https://fliki.ai?via=rmw","category":"Video"},
  {"id":"simplified","name":"Simplified AI","tagline":"All-in-One AI Design","price":"$18/mo","commission":"$45 per sale","link":"https://simplified.com?via=rmw","category":"Design"},
  {"id":"notionai","name":"Notion AI","tagline":"AI Workspace","price":"$10/mo","commission":"$35 per sale","link":"https://notion.so?via=rmw","category":"Productivity"},
  {"id":"lumen5","name":"Lumen5 AI","tagline":"AI Video for Business","price":"$19/mo","commission":"$50 per sale","link":"https://lumen5.com?via=rmw","category":"Video"},
  {"id":"ryrob","name":"RyRob AI","tagline":"AI Blog + Affiliate","price":"$29/mo","commission":"$65 per sale","link":"https://ryrob.com?via=rmw","category":"Writing"},
  {"id":"tome","name":"Tome AI","tagline":"AI Presentation Maker","price":"$16/mo","commission":"$40 per sale","link":"https://tome.app?via=rmw","category":"Productivity"}
];

let current = JSON.parse(fs.readFileSync('tools.json','utf8'));
let next = allTools.find(t => !current.some(c=>c.id===t.id));
if(next){
  current.push(next);
  fs.writeFileSync('tools.json', JSON.stringify(current,null,2));
  console.log('Added: '+next.name);
} else {
  console.log('All 20 tools already added - Mission Complete!');
}
