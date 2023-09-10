import {
  ITriggerClassType,
  ITriggerContructorParams,
  IHelpers,
  AnyObject,
  ITriggerOptions,
  IWebhookRequest,
} from "actionsflow-core";

export default class SlackCommandWebhook implements ITriggerClassType {
  constructor({ helpers, options }: ITriggerContructorParams) {
    this.options = options;
    this.helpers = helpers;
  }
  options: ITriggerOptions = {};
  helpers: IHelpers;

  webhooks = [
    {
      handler: (request: IWebhookRequest): AnyObject[] => {
        let items: AnyObject[] = [{}];

        if (request.body && (request.body as AnyObject).command) {
          const command = (request.body as AnyObject).command as string;

          switch (command) {
            case "/translateBook": {
              items = this._generateTranslateBook(request.body as AnyObject);
              break;
            }
          }
        }
        return items;
      },
    },
  ];

  private _generateTranslateBook(item: AnyObject): AnyObject[] {
    return [
      {
        command: 'translateBook',
        name: item.text as string
      }
    ]
  }
}
