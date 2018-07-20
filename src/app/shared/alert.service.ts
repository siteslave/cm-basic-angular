import { Injectable } from '@angular/core';
import swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success() {
    swal({
      title: 'Success',
      text: 'ดำเนินการเสร็จเรียบร้อยแล้ว',
      type: 'success',
      timer: 1500
    });
  }

  error() {
    swal({
      title: 'Error!',
      text: 'Do you want to continue',
      type: 'error',
      confirmButtonText: 'Ok'
    });
  }

  confirm() {
    return swal({
      title: 'Are you sure?',
      text: "ต้องการทำรายการนี้ ใช่หรือไม่!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่',
      cancelButtonText: 'ไม่ใช่'
    });
  }

}
