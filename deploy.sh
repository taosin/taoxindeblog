# 构建
npm run build

# 导航到构建输出目录
cd dist

git init
git add -A
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push -f https://git.dev.tencent.com/imocco/imocco.coding.me.git master