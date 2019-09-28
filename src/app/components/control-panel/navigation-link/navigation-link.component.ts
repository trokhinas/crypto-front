import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent implements OnInit {
    @Input() link: string;
    @Input() icon: string;
    @Input() title: string;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    isNotCurrentPage(link: string) {
        return !this.router.url.includes(link);
    }
}
