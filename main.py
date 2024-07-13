
from typing import Optional
from datetime import date
from fastapi import FastAPI, Query, Depends
from pydantic import BaseModel

app = FastAPI()

class SBooking(BaseModel):
    room_id: int
    date_from: date
    date_to: date

class SearchHotels():
    def __init__(
            self,
            location: str,
            date_from: date,
            date_to: date,
            spa: Optional[bool] = None,
            stars: Optional[int] = Query(None, ge=1, le=5)
        ):
            self.location = location
            self.date_from = date_from
            self.date_to = date_to
            self.spa = spa
            self.stars = stars


@app.get("/hotels")
def get_hotels(search_args:SearchHotels=Depends()):
    return search_args

@app.post("/bookings")
def add_booking(booking: SBooking):
    return booking
