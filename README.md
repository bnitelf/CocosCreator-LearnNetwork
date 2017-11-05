# CocosCreator-LearnNetwork
เป็น project สำหรับศึกษาใช้ network ใน Cocos Creator เริ่มทำใน Cocos Creator v1.6.2

## prerequisite
* Cocos Creator v1.6.2 or above
* this [simple Game Web Service](https://github.com/bnitelf/GameWebService)

## How to open project
1. Download as zip
1. Extract
1. Open Cocos Creator -> Click Open Other... tab
1. Browse to extracted folder -> Click open
1. That's it.

## Scene
- **helloworld** - เป็น scene ที่จะยิง request ไปที่ GameWebService มีตัวอย่าง function การ
  - Create player
  - Get player info
  - Update player info
  - Delete player (not actually delete, just mark it as delete)
- **WebpageScene** - เป็น scene ตัวอย่างการแสดงหน้า webpage

## Script
- **HelloWorld** - มีตัวอย่าง code การ request (GET, POST) ไปที่ web service (ใช้ form data)
