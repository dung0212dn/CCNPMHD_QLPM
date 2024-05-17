import { isNull } from "lodash"

export const message = {
    'max': (max, field = null) => !isNull(field) ? `${field} tối đa ${max} kí tự` : `Tối đa ${max} ký tự`,
    'min': (min, field = null) => !isNull(field) ? `${field} ít nhất ${min} kí tự` : `Trường này ít nhất ${min} ký tự`,
    'required': (field = null) =>  !isNull(field) ? `${field} không được bỏ trống` : `Trường này không được bỏ trống` ,
    'invalid': (field = null) => !isNull(field) ? `${field} không hợp lệ` : `Dữ liệu không hợp lệ` ,
    'wrong': (field) =>  `${field} sai` , 
}