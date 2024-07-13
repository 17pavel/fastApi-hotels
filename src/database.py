from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker


class Base(DeclarativeBase):
    pass

# DB_HOST = "localhost"
# DB_PORT = 5432
# DB_USER = "postgres"
# DB_PASS = "postgres"
# DB_NAME = "postgres"

DATABASE_URL =f"sqlite+aiosqlite:///./hotels.db"

engine = create_async_engine(DATABASE_URL)



