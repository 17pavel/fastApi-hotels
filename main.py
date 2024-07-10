import databases
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get("/hotels/{hotel_id}")
def get_hotels(hotel_id: int, date_from: str, date_to: str):
    return hotel_id, date_from, date_to