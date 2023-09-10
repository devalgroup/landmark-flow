import { ITriggerClassType, ITriggerContructorParams, IHelpers, AnyObject, ITriggerOptions, IWebhookRequest } from "actionsflow-core";
export default class SlackCommandWebhook implements ITriggerClassType {
    constructor({ helpers, options }: ITriggerContructorParams);
    options: ITriggerOptions;
    helpers: IHelpers;
    webhooks: {
        handler: (request: IWebhookRequest) => AnyObject[];
    }[];
    private _generateTranslateBook;
}
