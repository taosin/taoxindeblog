---
title: 当我有了一台云服务器
date: 2019-10-11
isTimeLine: true
sidebar: true
isComment: true
categories:
- 关于技术
tags: 
- 环境配置
- 服务器

vssue-title: set-a-new-server
---

当我有了一台云服务器之后，嘿嘿，就开始了下面的一系列操作。。。

![](http://images.iamtaoxin.com/2019-10-11-9ae2d0134699f9b5a56a78ba5f3d03e7.jpg)

### 一、安装 Node.js

1. 进入指定目录，下载 Node 安装包

```bash
$ wget https://npm.taobao.org/mirrors/node/v11.0.0/node-v11.0.0.tar.gz
```

2. 解压安装包

```bash
tar -xvf node-v11.0.0.tar.gz
```

3. 安装相关插件

```bash
$ cd node-v11.0.0
$ sudo yum install gcc gcc-c++
```

4. 进行默认配置

```bash
$ ./configure
```

5. 编译

```bash
$ mash
```

6. 开始安装

```bash
$ sudo make install
```

7. 验证版本

```bash
$ node -v
```

此时，Node.js 已经安装成功。

---

### 二、安装npm

**1. 安装npm**

```bash
$ sudo yum install npm
```

**2.查看npm版本**

```bash
$ npm -v
```

---

### 三、安装 htop

```bash
$ sudo yum install htop
```

---

### 四、安装 pm2

```bash
$ npm install -g pm2
```

---

### 五、安装 Nginx

1. 安装

```bash
$ yum install nginx -y
```

2. 启动

```bash
$ nginx
```

此时，访问 http://<您的域名> 可以看到 Nginx 的测试页面 
*<p style="color:red">如果无法访问，请重试用 `nginx -s reload` 命令重启 Nginx</p>*

3. 配置静态服务器访问路径

外网用户访问服务器的 Web 服务由 Nginx 提供，Nginx 需要配置静态资源的路径信息才能通过 url 正确访问到服务器上的静态资源。

打开 `Nginx` 的默认配置文件 */etc/nginx/nginx.conf* ，修改 Nginx 配置，将默认的` root /usr/share/nginx/html;` 修改为: `root /data/www;`，如下：
示例代码：`/etc/nginx/nginx.conf`

```javascript
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

include /usr/share/nginx/modules/ *.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    include /etc/nginx/conf.d/ *.conf;

    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        root         /data/www;

        include /etc/nginx/default.d/ *.conf;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }

}
```

配置文件将 `/data/www/static` 作为所有静态资源请求的根路径，如访问: ***http://<您的域名>/static/index.js***，将会去 `/data/www/static/ `目录下去查找 **index.js**。现在我们需要重启 Nginx 让新的配置生效，如
```bash
nginx -s reload
```
重启后，现在我们应该已经可以使用我们的静态服务器了，现在让我们新建一个静态文件，查看服务是否运行正常。

首先让我们在 */data* 目录 下创建 `www` 目录，如：
```bash
mkdir -p /data/www
```

4. 创建第一个静态文件

在 **/data/www** 目录下创建我们的第一个静态文件`index.html`

示例代码：`/data/www/index.html`
```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>第一个静态文件</title>
</head>
<body>
Hello world！
</body>
</html>
```
现在访问 `http://<您的域名>/index.html` 应该可以看到页面输出 [Hello world!]

到此，一个基于 `Nginx` 的静态服务器就搭建完成了，现在所有放在 /data/www 目录下的的静态资源都可以直接通过域名访问。

<span>注：如果无显示，请刷新浏览器页面。</span>