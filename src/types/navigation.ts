export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  OTPVerify: { phone?: string; name?: string; email?: string } | undefined;
  Permissions: undefined;
};

export type MainStackParamList = {
  // Main screens
  Home: undefined;
  BookERickshaw: undefined;
  
  // Ride booking flow
  Pickup: { destination?: string } | undefined;
  Drop: { pickupLocation?: string } | undefined;
  Solo: undefined;
  Sharing: undefined;
  Rentals: undefined;
  
  // Existing ride flow
  ScheduleRide: undefined;
  AddStops: undefined;
  FareEstimate: {
    pickup: string;
    dropoff: string;
  };
  ConfirmRide: {
    rideId: string;
    driverName: string;
    vehicleNumber: string;
    price: string;
    eta: string;
  };
  SearchingDriver: undefined;
  DriverComing: { etaMinutes?: number } | undefined;
  InRide: undefined;
  Payment: undefined;
  Rating: { driverName?: string; rideId?: string } | undefined;
  CancelRide: undefined;
  
  // Other
  Map: undefined;
  Wallet: undefined;
  Profile: undefined;
};

