import Mock from 'mockjs'
Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id|1-50":0,
    "username": "@cname",
    "email": "admin@51purse.com",
    "phone": 0,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
})