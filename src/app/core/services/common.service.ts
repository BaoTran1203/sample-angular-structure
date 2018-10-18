import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as $ from 'jquery';

@Injectable({providedIn : 'root'})
export class CommonService {
  constructor(public http: HttpClient) {}

  /**
   * Scroll to top
   */
  top() {
    $("html, body").animate({ scrollTop: 0 }, 800);
  }

  activeMenu(code) {
    setTimeout(() => {
      $("[data-menu]").removeClass("active");
      $(`[data-menu="${code}"]`).addClass("active");
    }, 100);

    setTimeout(() => {
      $("[data-menu]").removeClass("active");
      $(`[data-menu="${code}"]`).addClass("active");
    }, 2000);
  }

  /**
   * Upload hình ảnh lên server
   * @param img
   * @param callback
   */
  uploadImage(img: any, callback) {
    let formData: FormData = new FormData();
    formData.append("image", img, img.name);

    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", (ev: ProgressEvent) => {
      //You can handle progress events here if you want to track upload progress (I used an observable<number> to fire back updates to whomever called this upload)
    });

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let data: any = JSON.parse(xhr.responseText);
        callback(data);
      }
    };

    // xhr.open("POST", `${APP_CONFIG.apiUrl}/upload/image`, true);
    // xhr.send(formData);
  }

  /**
   * Upload hình ảnh lên server
   * @param file
   * @param callback
   */
  uploadFile(file: any, callback) {
    let formData: FormData = new FormData();
    formData.append("file", file, file.name);

    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", (ev: ProgressEvent) => {
      //You can handle progress events here if you want to track upload progress (I used an observable<number> to fire back updates to whomever called this upload)
    });

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let data: any = JSON.parse(xhr.responseText);
        callback(data);
      }
    };

    // xhr.open("POST", `${APP_CONFIG.apiUrl}/upload/file`, true);
    // xhr.send(formData);
  }
}
