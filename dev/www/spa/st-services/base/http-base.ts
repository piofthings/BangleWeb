import * as RSVP from "rsvp";
export class HttpBase {
    // private serviceName: string;
    private serviceType: string;
    private serviceUrl: string;
    private successCb: (data: any)=>void;
    private failureCb: (error: Error)=>any;
    private client = new XMLHttpRequest();

    constructor(serviceType: string, servicesUrl: string, success: (data: any)=>void, failure: (error: Error)=>any) {
        this.serviceType = serviceType;
        this.serviceUrl = servicesUrl;
        this.successCb = success;
        this.failureCb = failure;
    }

    public getPromise = (data: any) => {
        let promise = new RSVP.Promise((resolve, reject) => {
            let client = new XMLHttpRequest();

            client.open(this.serviceType, this.serviceUrl);
            client.onload = (ev: ProgressEvent<EventTarget>) => {
                if (client.readyState === client.DONE) {
                    if (client.status === 200) {
                        resolve(client.response);
                    }
                    else {
                        reject(client);
                    }
                }
            };
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.setRequestHeader("Content-Type", "application/json");

            
            client.send(JSON.stringify(data));
            
        });
        return promise;
    }

    public execute = (data?: any) => {
        let promise = new RSVP.Promise((resolve: any, reject: any) => {
            let client = new XMLHttpRequest();
            //console.log("Service Type:" + this.serviceType + "; Service URL:" + this.serviceUrl)
            client.open(this.serviceType, this.serviceUrl);
            client.onload = (ev: ProgressEvent<EventTarget>) => {
                if (client.readyState === client.DONE) {
                    if (client.status === 200) {
                        resolve(client.response);
                    }
                    else {
                        reject(client);
                    }
                }
            };
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.setRequestHeader("Content-Type", "application/json");

            
    
            client.send(JSON.stringify(data));

        });

        promise.then((json: any) => {
            // continue
            //console.log("HTTPBASE THEN:"+ JSON.stringify(json));
            this.successCb(json);
        }, (error: Error) => {
            // handle errors
            //console.log("HTTPBASE ERROR:"+ JSON.stringify(error));
            this.failureCb(error);
        });
    }

}
