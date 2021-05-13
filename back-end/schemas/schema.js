// Bruna Bispo Abatepaulo - 101200299
// COMP 3133 - Assignment 01

const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
    type Hotel {
        hotel_id: ID!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        user_id: Float!
    }

    type Booking {
        booking_id: ID!
        hotel_name: String!
        username: String!
        booking_date: String!
        booking_start: String!
        booking_end: String!
    }

    type User {
        user_id: ID!
        username: String!
        password: String!
        email: String!
    }

    type Query {
        getHotels: [Hotel]
        getHotelByName(hotel_name: String!): [Hotel]
        getHotelByCity(city: String!): [Hotel]
        getBookings: [Booking]
        getUsers: [User]
        getHotelByID(hotel_id: ID!): Hotel
        getUserByID(user_id: ID!): User
        getBookingByID(booking_id: ID!): Booking
        getUserByName(username: String!): [User]
        getBookingByUsername(username: String!): [Booking]
    }

    type Mutation {
        createHotel(
            hotel_id: ID!
            hotel_name: String!
            street: String!
            city: String!
            postal_code: String!
            price: Float!
            email: String!
            user_id: Float!
        ): Hotel

        bookHotel(
            booking_id: ID!
            hotel_name: String!
            username: String!
            booking_date: String!
            booking_start: String!
            booking_end: String!
        ): Booking

        createUser(
            user_id: ID!
            username: String!
            password: String!
            email: String!
        ): User
    }
`