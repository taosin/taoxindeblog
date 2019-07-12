# 创建文章

cd src/_posts/

time=$(date "+%Y-%m-%d %H:%M:%S")

echo '---\ntitle: '$1'\ndate: '$time'\ncategory: \ntags: \n\t-: \nvssue-title: '$1'\n---' > $1.md

echo $1'.md create success'

exit
