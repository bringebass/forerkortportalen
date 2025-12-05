import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const DEFAULT_DB_NAME = process.env.MONGODB_DB ?? "drivingschool_leads";

if (!MONGODB_URI) {
  console.warn(
    "MONGODB_URI is not defined. API routes depending on the database will fail until it is set."
  );
}

type MongoCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongoCache | undefined;
}

const cache: MongoCache =
  global.mongooseCache ?? {
    conn: null,
    promise: null,
  };

export async function connectToDatabase() {
  if (cache.conn) {
    return cache.conn;
  }

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI mangler i miljøvariablene.");
  }

  if (!cache.promise) {
    mongoose.set("strictQuery", true);
    cache.promise = mongoose.connect(MONGODB_URI, {
      dbName: DEFAULT_DB_NAME,
      maxPoolSize: 5,
    });
  }

  cache.conn = await cache.promise;
  global.mongooseCache = cache;

  return cache.conn;
}






