import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  public hash: string;
  public ipfs;
  
  public prefix = 'https://ipfs.io/ipfs/';
  
  constructor(private http: HttpClient) {
    
  }

  async getIPFSFile(hash: String) {
  //  return await JSON.parse(this.ipfs.files.cat(hash).toString());
  }

  public getProfile() {
    let hash = this.prefix+ 'QmWxcbQYoXPwSPNFof32ZUZEtdfs9ZhMENnoVQ37S584qY';
    return this.http.get(hash)
  }

  public getPosts() {
    let hash = this.prefix + 'QmZ9VbboirKbzm5r7Q12AJFiGWovQHFMeUF3HbFFq67N5w';
    return this.http.get(hash);
  }
}
