import { Injectable } from '@angular/core';
import { FBCottonBallService } from 'projects/common-api/src/lib/cotton-ball/cotton-ball.service';
import { CottonBall } from 'projects/common-model/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class CottonBallService {

  constructor(private fbService:FBCottonBallService) { }

  saveCottonBall(cBall:CottonBall){
    return this.fbService.saveCottonBall(cBall);
  }
}
