const logger = (req, res, next) => {   
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().replace(/T/, ' ').replace(/\..+/, '');
    const logMessage = `[${formattedDate}] ${req.method} ${req.url}`;
    console.log(logMessage);
    next();
}
module.exports = logger;