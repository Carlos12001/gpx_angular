import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IActivity } from '../shared/activity.model';
import { ActivityService } from '../services/activity.service';
import { SAVED_ACTIVITIES } from '../shared/activities';

var apiToken = environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare var L: any;

const defaultCoords: number[] = [40, -80];
const defaultZoom: number = 8;

@Injectable()
export class MapService {
  constructor() {}

  getActivity(id: number) {
    return SAVED_ACTIVITIES.slice(0).find((run) => run.id == id);
  }

  plotActivity(id: number) {
    // var myStyle = {
    //   color: '#3949AB',
    //   weight: 3,
    //   opacity: 0.95,
    // };

    var map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;

    L.tileLayer(
      'https://api.mapbox.com/styles/v1/EJEMPLO1234/clp3y534c00zt01pe7kox24vy/tiles/256/{z}/{x}/{y}@2x?access_token=EJEMPLO2134',
      {
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: apiToken,
      }
    ).addTo(map);

    var customLayer = L.geoJson(null, {
      style: 'mapbox://styles/mapbox/streets-v12',
    });

    const activity = SAVED_ACTIVITIES.slice(0).find((run) => run.id == id);
    if (!activity) {
      // Handle the case where the activity is not found
      return;
    }

    var gpxLayer = omnivore
      .gpx(activity.gpxData, null, customLayer)
      .on('ready', function () {
        map.fitBounds(gpxLayer.getBounds());
      })
      .addTo(map);
  }
}
