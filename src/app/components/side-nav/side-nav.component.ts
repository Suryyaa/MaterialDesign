import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  // isExpanded(item: any): boolean {
  //   return item.subItems.some(subItem => this.router.isActive(subItem.path, true));
  // }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  navigationItems = [
    { label: 'Home', path: '/home' },
    {
      label: 'Products',
      subItems: [
        { label: 'Product 1', path: '/products/1' },
        { label: 'Product 2', path: '/products/2' },
        { label: 'Product 3', path: '/products/3' }
      ]
    },
    { label: 'About', path: '/about' },
    // Add more items as needed
  ];
}
