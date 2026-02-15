# dart-count

```bash
rm -rf dist
npm run build --verbose
pm2 list
pm2 delete X
pm2 start serve --name dart-count -- -s dist -l 3001
```
