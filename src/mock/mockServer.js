import Mock from 'mockjs'
import decision from './data'

Mock.mock("/api/admin","post",decision.getToken)