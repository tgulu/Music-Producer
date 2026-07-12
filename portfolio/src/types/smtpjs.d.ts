export {};

declare global {
  interface Window {
    Email: {
      send: (params: {
        SecureToken: string;
        To: string;
        From: string;
        Subject: string;
        Body: string;
      }) => Promise<string>;
    };
  }
}
