import mongoose from 'mongoose'

const Schema  = mongoose.Schema

const caSchema  = new Schema(
    {
        "id": {
          "type": "Number"
        },
        "name": {
          "type": "String"
        },
        "image": {
          "type": "String"
        },
        "intro": {
          "type": "String"
        },
        "rating": {
          "type": "Number"
        },
        "reviewCount": {
          "type": "Number"
        },
        "taskComplexity": {
          "type": "String"
        },
        "price": {
          "type": "String"
        },
        "deliveryTime": {
          "type": "String"
        },
        "testimonial": {
          "text": {
            "type": "String"
          },
          "author": {
            "type": "String"
          }
        },
        "about": {
          "from": {
            "type": "String"
          },
          "partnerSince": {
            "type": "Number"
          },
          "averageResponseTime": {
            "type": "String"
          },
          "description": {
            "type": "String"
          },
          "services": {
            "type": [
              "String"
            ]
          },
          "benefits": {
            "type": [
              "String"
            ]
          }
        }
      }
)

const caModel = mongoose.model("ca",caSchema)

export default caModel