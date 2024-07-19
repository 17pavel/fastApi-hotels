
from typing import Optional
from datetime import date
from fastapi import FastAPI, Query, Depends
from pydantic import BaseModel

app = FastAPI()

class SBooking(BaseModel):
    room_id: int
    date_from: date
    date_to: date


@app.get("/hotels")
def get_hotels(
    location: str,
    date_from: date,
    date_to: date,
    spa: Optional[bool] = None,
    stars: Optional[int] = Query(None, ge=1, le=5)
):
    return location, date_from, date_to

@app.post("/bookings")
def add_booking(booking: SBooking):
    pass


