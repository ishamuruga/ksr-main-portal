import { Component, Input, OnInit } from '@angular/core';
import FundRaising from '../../model/FundRaising';

@Component({
  selector: 'lib-card-fund-raising',
  templateUrl: './card-fund-raising.component.html',
  styleUrls: ['./card-fund-raising.component.css']
})
export class CardFundRaisingComponent implements OnInit {

  @Input()
  datas: FundRaising[] = [
    { 
      id: 1, 
      title: "milaap", 
      description: "It was on the third of November 2018 that we were taken to Karunashraya by our school as a project of the Rotary Club of Bangalore. The instant we saw the miserable state of the cancer patients, something prodigious stirred inside us. The bleak reality was that the patients were under an awful amount of suffering ...", 
      imageUrl: "https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1602914530/production/images/campaign/220990/karun_2_zd8inl_1602914533.jpg", 
      link: "https://milaap.org/fundraisers/support-cancer-patient-2" 
    },
    { 
      id: 2, 
      title: "milaap", 
      description: "For most people, it would have been a time to prepare for a comfortable retired life. But Kishore Rao, who had been serving at a corporate for 28 years, had an inner calling and took early retirement at 55 to help those who were suffering from cancer. Hailing from Bengaluru, he is now 81 and runs Karunashraya, a free facility for end-stage cancer patients. ...", 
      imageUrl: "https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1540058388/production/images/campaign/27185/Cover_Image_ycpkdb_1540058390.jpg", 
      link: "https://milaap.org/fundraisers/helping-cancer-patients" 
    },
    { 
      id: 3, 
      title: "milaap", 
      description: "I am Kumar Kuppuswamy, a passionate Ultra runner, have been running Marathons, Ultra Marathons for over 11 years now, for wellness and recreation. Also, I have always wished to use running to raise funds for a good cause and hope to achieve it with your great support. ...", 
      imageUrl: "https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_452,w_603/v1534488949/production/images/campaign/44957/Img-3_1507022087_ouyvih_1534488951.jpg", 
      link: "https://milaap.org/fundraisers/help-karunashraya" 
    },
    { 
      id: 4, 
      title: "giveindia.org", 
      description: "Studies show over 70% of senior citizens in India face abuse - verbal, physical, emotional and financial. They also live with deteriorating health conditions they cannot afford to treat. Mission: #EldersLivesMatter ensures they are not alone, sick and hungry ...", 
      imageUrl: "https://cdn.givind.org/static/images/campaign/EldersLivesMatter-cta-image.jpg", 
      link: "https://www.giveindia.org/missions/mission-elders-lives-matter" 
    },
    { 
      id: 5, 
      title: "giveindia.org", 
      description: "One in three of the world's malnourished children lives in India. Our children are going to school hungry. They suffer from lack of concentration and reduced cognitive development, directly leading to their dropping out of school. Join us in our mission to prevent hunger diminishing our children’s opportunities to succeed. ...", 
      imageUrl: "https://cdn.givind.org/static/images/campaign/target-image1.jpg", 
      link: "https://www.giveindia.org/campaign/mission-10-million-meals" 
    }
  ];


  

  constructor() { }

  ngOnInit(): void {
  }

}
