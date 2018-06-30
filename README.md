<div align="middle">
  <img src="https://github.com/openhack-freeder/freeder-crawler/blob/master/img/logo.png" height="250px" >
</div>

<h1 align="center">freeder-server</h1>
<p align="center">
	<img src="https://img.shields.io/badge/OpenHack-3th-blue.svg">
</p>

## Install
```bash
git clone https://github.com/openhack-freeder/freeder-server.git f-server
cd f-server
npm install && npm install -g pm2
cp config/_config.json config/config.json
mysql -u root -p test < init.sql
pm2 start bin/www
```

## Example 
### API request
```text
curl http://167.99.93.8:3000/api/v1/get_content
```

### API return
```text
[
	{
		idx: 1,
		category: "축제,행사",
		title: "두산청소년아트스쿨2018 ",
		date: "2018.07.07~2018.08.04",
		time: "(토) 오전 10시 / 7.21 제외 ",
		where: "경기도두산아트센터 연강홀 ",
		url: "https://www.ggcf.or.kr"
	}
]
```

## License

<img align="right" src="http://opensource.org/trademarks/opensource/OSI-Approved-License-100x137.png">

The class is licensed under the [MIT License](http://opensource.org/licenses/MIT):

Copyright &copy; 2018 [Seonggwon Yoon](http://www.github.com/gwons).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
