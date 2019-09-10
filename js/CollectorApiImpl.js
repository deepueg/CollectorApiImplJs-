import { CollectorApi } from 'collector-api'
import {TrustedcollectorService, PaymentEvent, LoginEvent } from 'trustedcollector';

CollectorApi.requests().registerPostEventRequestHandler((requestData) => {
    this.trustedcollectorService.pushEvent("frontline.login", loginEventData);
    //TODO: Write your implementation and resolve or reject the promise
    //return Promise.resolve(result) || Promise.reject(err)
})
CollectorApi.requests().registerAddItemRequestHandler((requestData) => {
    //TODO: Write your implementation and resolve or reject the promise
    //return Promise.resolve(result) || Promise.reject(err)
})
