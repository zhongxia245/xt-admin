# 通用表格配置

这里的文件是通用后台的一些相关文件，如果是基于该通用后台系统进行二次开发的系统，最好不要修改这里的代码，避免引出BUG。 

## 一、目录说明

- Curd  通用的增删改查基础表
- DbConfig 数据库配置表
- NavConfig 菜单配置表
- Services AJAX相关接口
- TableConfig 表配置
- TableFieldConfig 表字段配置

## 二、如何使用

1. 在 表配置 【TableConfig】里面添加一个新的表
2. 在 表字段配置 【TableFieldConfig】字段配置，配置表格展示和表单展示相关信息
3. 然后在  src/nav.js 里面配置一下路径【目前未集成使用 navconfig 里面的菜单配置，先手动配置】
4. 配置上菜单后，即可看到页面，完成增删改查的简单操作。


## 三、TODO

1. 后续会完善表单的类型
2. 表的展示优化
3. 表数据获取的优化。

## 四、CHANGELOG

### 2018-03-14 20:52:26

1. 把表创建，表单字段配置，关联起来。可以通过在通用后台里面配置，对表进行简单的增删改查。
