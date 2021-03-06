import React, { Component } from 'react';
import XtTable from '../../components/XtTable';
import { get, getById, update, getColumns, addTableConfig, delTableConfig } from '../../api'

const COLUMNS_CONFIG = [
  {
    "id": 116,
    "table_id": 28,
    "table_name": "c_tableconfig",
    "name": "id",
    "fieldname": "id",
    "title": "id",
    "data_type": 0,
    "col_show": 1,
    "col_width": null,
    "col_lock": "0",
    "col_unit": null,
    "col_sort": 0,
    "col_sortable": null,
    "col_align": "center",
    "form_show": 0,
    "form_type": 1,
    "form_disabled": 0,
    "form_sort": 0,
    "form_format": null,
    "form_required": 0,
    "form_validate_msg": null,
    "form_rules": null,
    "remark": "",
    "create_time": "2018-03-12T08:30:11.000Z"
  },
  {
    "id": 117,
    "table_id": 28,
    "table_name": "c_tableconfig",
    "name": "database",
    "fieldname": "database",
    "title": "数据库",
    "data_type": 0,
    "col_show": 1,
    "col_width": null,
    "col_lock": "0",
    "col_unit": null,
    "col_sort": 1,
    "col_sortable": null,
    "col_align": "center",
    "form_show": 0,
    "form_type": 1,
    "form_disabled": 0,
    "form_sort": 1,
    "form_format": null,
    "form_required": 0,
    "form_validate_msg": null,
    "form_rules": null,
    "remark": "数据库",
    "create_time": "2018-03-12T08:30:11.000Z"
  },
  {
    "id": 118,
    "table_id": 28,
    "table_name": "c_tableconfig",
    "name": "table_name",
    "fieldname": "table_name",
    "title": "表名",
    "data_type": 0,
    "col_show": 1,
    "col_width": null,
    "col_lock": "0",
    "col_unit": null,
    "col_sort": 2,
    "col_sortable": null,
    "col_align": "center",
    "form_show": 1,
    "form_type": 1,
    "form_disabled": 0,
    "form_sort": 2,
    "form_format": null,
    "form_required": 0,
    "form_validate_msg": null,
    "form_rules": null,
    "remark": "表名",
    "create_time": "2018-03-12T08:30:11.000Z"
  },
  {
    "id": 119,
    "table_id": 28,
    "table_name": "c_tableconfig",
    "name": "title",
    "fieldname": "title",
    "title": "表名称",
    "data_type": 0,
    "col_show": 1,
    "col_width": null,
    "col_lock": "0",
    "col_unit": null,
    "col_sort": 3,
    "col_sortable": null,
    "col_align": "center",
    "form_show": 0,
    "form_type": 1,
    "form_disabled": 0,
    "form_sort": 3,
    "form_format": null,
    "form_required": 0,
    "form_validate_msg": null,
    "form_rules": null,
    "remark": "表名称",
    "create_time": "2018-03-12T08:30:11.000Z"
  },
  {
    "id": 115,
    "table_id": 28,
    "table_name": "c_tableconfig",
    "name": "table_edit",
    "fieldname": "table_edit",
    "title": "是否展示编辑",
    "data_type": 0,
    "col_show": 0,
    "col_width": null,
    "col_lock": "left",
    "col_unit": null,
    "col_sort": 4,
    "col_sortable": null,
    "col_align": "center",
    "form_show": 0,
    "form_type": 1,
    "form_disabled": 0,
    "form_sort": 4,
    "form_format": null,
    "form_required": 0,
    "form_validate_msg": null,
    "form_rules": null,
    "remark": "是否展示编辑",
    "create_time": "2018-03-12T08:30:11.000Z"
  },
  {
    "id": 120,
    "table_id": 28,
    "table_name": "c_tableconfig",
    "name": "table_del",
    "fieldname": "table_del",
    "title": "是否展示删除",
    "data_type": 0,
    "col_show": 0,
    "col_width": null,
    "col_lock": "0",
    "col_unit": null,
    "col_sort": 5,
    "col_sortable": null,
    "col_align": "center",
    "form_show": 0,
    "form_type": 1,
    "form_disabled": 0,
    "form_sort": 5,
    "form_format": null,
    "form_required": 0,
    "form_validate_msg": null,
    "form_rules": null,
    "remark": "是否展示删除",
    "create_time": "2018-03-12T08:30:11.000Z"
  },
  {
    "id": 121,
    "table_id": 28,
    "table_name": "c_tableconfig",
    "name": "remark",
    "fieldname": "remark",
    "title": "备注",
    "data_type": 0,
    "col_show": 1,
    "col_width": null,
    "col_lock": "0",
    "col_unit": null,
    "col_sort": 6,
    "col_sortable": null,
    "col_align": "center",
    "form_show": 0,
    "form_type": 1,
    "form_disabled": 0,
    "form_sort": 6,
    "form_format": null,
    "form_required": 0,
    "form_validate_msg": null,
    "form_rules": null,
    "remark": "备注",
    "create_time": "2018-03-12T08:30:11.000Z"
  },
  {
    "id": 122,
    "table_id": 28,
    "table_name": "c_tableconfig",
    "name": "create_time",
    "fieldname": "create_time",
    "title": "创建时间",
    "data_type": 0,
    "col_show": 1,
    "col_width": null,
    "col_lock": "0",
    "col_unit": null,
    "col_sort": 7,
    "col_sortable": null,
    "col_align": "center",
    "form_show": 0,
    "form_type": 1,
    "form_disabled": 0,
    "form_sort": 7,
    "form_format": null,
    "form_required": 0,
    "form_validate_msg": null,
    "form_rules": null,
    "remark": "创建时间",
    "create_time": "2018-03-12T08:30:11.000Z"
  }
]

const FILTER = [
  { text: "id", value: "id" },
  { text: "表名", value: "table_name" },
  { text: "数据库", value: "database" },
]

export default class TableConfigTable extends Component {
  static displayName = 'TableConfigTable';
  render() {
    const TABLE_NAME = 'c_tableconfig'
    const api = {
      get,
      getById,
      update,
      getColumns,
      add: addTableConfig,
      del: delTableConfig,
    }
    // 这里的key不能少，否则react会缓存，不重新渲染
    return (
      <div className="table-page" key={TABLE_NAME}>
        <XtTable {...api} name={TABLE_NAME} columns={COLUMNS_CONFIG} filter={FILTER} />
      </div>
    );
  }
}
