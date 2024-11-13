declare module 'google-map-react' {
    import * as React from 'react';
  
    export interface GoogleMapReactProps {
      bootstrapURLKeys: { key: string };
      defaultCenter?: { lat: number; lng: number };
      defaultZoom?: number;
      center?: { lat: number; lng: number };
      zoom?: number;
      options?: (maps: any) => any;
      onGoogleApiLoaded?: (mapProps: { map: any; maps: any }) => void;
      onLoad?: (map: any) => void;
      onUnmount?: (map: any) => void;
      children?: React.ReactNode;
    }
  
    export default class GoogleMapReact extends React.Component<GoogleMapReactProps> {}
  }

  