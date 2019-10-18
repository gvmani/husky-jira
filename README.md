# husky-jira
Jira git hooks
```
{
...
  "jiraId":"TEST",
  "scripts": {
      "husky-jira" : "husky-jira"
   },
   "husky": {
     "hooks": {
       "commit-msg": "npm run --silent husky-jira commit-msg"
     }
   }
  ...
 }
 ```
