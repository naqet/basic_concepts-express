import { NextFunction, Request, Response } from 'express';

const cookieHandler = () => (req: Request, res: Response, next: NextFunction) => {
  try {
    const { headers: { cookie } } = req;
    if (cookie) {
      const values = cookie.split(';').reduce((cookies, item) => {
        const data = item.trim().split('=');
        return { ...cookies, [data[0]]: data[1] };
      }, {});
      res.locals.cookie = values;
    } else res.locals.cookie = {};
    next();
  } catch (err) {
    next(err);
  }
};

export default cookieHandler;
