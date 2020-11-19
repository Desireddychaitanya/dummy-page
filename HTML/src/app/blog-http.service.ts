import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import{ Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
public allblogs;
public currentblog;
public baseurl='https://blogapp.edwisor.com/api/v1/blogs';
  constructor() { 
    console.log(blog-http service is called);

  }
public getallblogs():any{

}
public getSingleBlogInformation(currentBlogId):any{

}




}
