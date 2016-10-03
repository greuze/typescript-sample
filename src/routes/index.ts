/// <reference path="../_all.d.ts" />
"use strict";

import * as express from "express";

export class Index {

  public index(req: express.Request, res: express.Response, next: express.NextFunction) {
    let resText = "OK";
    console.log("Request from", req.hostname, "responding", resText);
    res.status(200).send(resText);
  }
}
