import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { BusinessService } from '../business.service';
import { Business } from '../business';
import { UserService } from '../../users/user.service';
import { User } from '../../users/user';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [BusinessService, UserService]
})

export class MapComponent implements OnInit {

  public lat: number;
  public lng: number;
  public zoom: number;
  public searchControl: FormControl;
  public imgurl: string;
  public myLat: number;
  public myLng: number;

  business: Business[];
  users: User[];
  selectedUser: User;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  @ViewChild("map")
  public mapElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private businessService: BusinessService,
    private userService: UserService
  ) { }



  ngOnInit() {


    this.userService
     .getUsers()
     .then((users: User[]) => {
      this.users = users;
    })

    this.businessService
    .getBusiness()
    .then((Business: Business[]) => {
     this.business = Business;
   })
    // Create search FormControl
    this.searchControl = new FormControl();

    // Set currente position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 15;
        });
      });
    });
  } // Close ngOnInit

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  setUSer(user: User) {
    this.selectedUser = user;
  }

} // Close MapComponent
