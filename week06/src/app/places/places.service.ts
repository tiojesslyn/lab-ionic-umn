import {Injectable} from '@angular/core';
import {Place} from "./place.model";

@Injectable({
    providedIn: 'root'
})
export class PlacesService {
    private _places: Place[] = [
        new Place(
            'p1',
            'Gading Apartement',
            '2BR, Luas dan Cozy',
            'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4037-24/riverpark-apartments-exterior.jpg',
            10000000
        ),
        new Place(
            'p2',
            'Gading 2',
            '2BR, Luas dan Cozy',
            'https://im.proptiger.com/1/1493340/6/estate-apartments-elevation-11051772.jpeg',
            10000000
        ),
        new Place(
            'p3',
            'Gading Apartement3',
            '2BR, Luas dan Cozy',
            'https://images3.roofandfloor.com/listing_6a354f1971c5e5636a735627f32d9092/1024x600/crystal-apartment-in-k-r-puram-elevation-photo-tjl.jpg',
            10000000
        )
    ];

    constructor() {
    }

    getPlaces() {
        return [...this._places];
    }

    getPlace(placeId: String) {
        return this._places.find(place => place.id === placeId );
    }
}
