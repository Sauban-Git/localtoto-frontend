export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  OTPVerify: { phone?: string; name?: string; email?: string } | undefined;
  Permissions: undefined;
};

export type MainStackParamList = {
  BookERickshaw: undefined;
  Pickup: undefined;
  Drop: undefined;
  ScheduleRide: undefined;
  AddStops: undefined;
  FareEstimate: undefined;
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
};

