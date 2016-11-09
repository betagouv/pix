
import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class RecordedSimulation extends Simulation {

	val httpProtocol = http
		.baseURL("http://staging.pix.beta.gouv.fr")
		.inferHtmlResources()
		.acceptHeader("application/vnd.api+json")
		.acceptEncodingHeader("gzip, deflate, sdch")
		.acceptLanguageHeader("fr-FR,fr;q=0.8,en-GB;q=0.6,en;q=0.4,it;q=0.2,es;q=0.2")
		.doNotTrackHeader("1")
		.userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36")

	val headers_0 = Map(
		"Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Upgrade-Insecure-Requests" -> "1")

	val headers_1 = Map("Accept" -> "text/css,*/*;q=0.1")

	val headers_3 = Map("Accept" -> "*/*")

	val headers_5 = Map("Accept" -> "image/webp,image/*,*/*;q=0.8")

	val headers_7 = Map("X-Requested-With" -> "XMLHttpRequest")

	val headers_66 = Map(
		"Accept-Encoding" -> "gzip, deflate",
		"Content-Type" -> "application/vnd.api+json",
		"Origin" -> "http://staging.pix.beta.gouv.fr",
		"X-Requested-With" -> "XMLHttpRequest")

	val headers_69 = Map(
		"Accept" -> "*/*",
		"Origin" -> "http://staging.pix.beta.gouv.fr")



	val scn = scenario("RecordedSimulation")
		.exec(http("request_0")
			.get("/")
			.headers(headers_0)
			.resources(http("request_1")
			.get("/assets/vendor.css")
			.headers(headers_1),
            http("request_2")
			.get("/assets/pix-live.css")
			.headers(headers_1),
            http("request_3")
			.get("/assets/pix-live.js")
			.headers(headers_3),
            http("request_4")
			.get("/assets/vendor.js")
			.headers(headers_3),
            http("request_5")
			.get("/images/pix-logo.png")
			.headers(headers_5)))
		.pause(4)
		.exec(http("request_6")
			.get("/home")
			.headers(headers_0)
			.resources(http("request_7")
			.get("/api/courses")
			.headers(headers_7),
            http("request_8")
			.get("/api/challenges/recmt1vM0Dl3X0CIQ")
			.headers(headers_7),
            http("request_9")
			.get("/api/challenges/recqxUz6DYwLPVCWh")
			.headers(headers_7),
            http("request_10")
			.get("/api/challenges/recvaILCv8mtzqB2m")
			.headers(headers_7),
            http("request_11")
			.get("/api/challenges/recLrixSqRxL5vJ54")
			.headers(headers_7),
            http("request_12")
			.get("/api/challenges/rec3mXgYY9E32ShNf")
			.headers(headers_7),
            http("request_13")
			.get("/api/challenges/recs1xp2Ik6Akrwsp")
			.headers(headers_7),
            http("request_14")
			.get("/api/challenges/recphb0Gowk6hcXdp")
			.headers(headers_7),
            http("request_15")
			.get("/api/challenges/rec8FzKzBkjDYiE8c")
			.headers(headers_7),
            http("request_16")
			.get("/api/challenges/recOJjFzL0I6QDvJl")
			.headers(headers_7),
            http("request_17")
			.get("/api/challenges/rectkDBolVTyEkoHX")
			.headers(headers_7),
            http("request_18")
			.get("/api/challenges/reco9l7yVkQTscB3A")
			.headers(headers_7),
            http("request_19")
			.get("/api/challenges/recADRNFqsgjIG9Zj")
			.headers(headers_7),
            http("request_20")
			.get("/api/challenges/recB9k5U9GUCSVTuP")
			.headers(headers_7),
            http("request_21")
			.get("/api/challenges/rectN26toxkJmt9S4")
			.headers(headers_7),
            http("request_22")
			.get("/api/challenges/recj0g7zZF5LTxij5")
			.headers(headers_7),
            http("request_23")
			.get("/api/challenges/recwWzTquPlvIl4So")
			.headers(headers_7),
            http("request_24")
			.get("/api/challenges/recFxCIKMhdRF6C0d")
			.headers(headers_7),
            http("request_25")
			.get("/api/challenges/recT0Ks2EDgoDgEKc")
			.headers(headers_7),
            http("request_26")
			.get("/api/challenges/recUcM3s9DFvpnFqj")
			.headers(headers_7),
            http("request_27")
			.get("/api/challenges/recge9Mkog1drln4i")
			.headers(headers_7),
            http("request_28")
			.get("/api/challenges/recdTpx4c0kPPDTtf")
			.headers(headers_7),
            http("request_29")
			.get("/api/challenges/recKeg1Ra0BWu3MYz")
			.headers(headers_7),
            http("request_30")
			.get("/api/challenges/recoblJdIoh2KtKTr")
			.headers(headers_7),
            http("request_31")
			.get("/api/challenges/recGFFQkMSbvYrzLW")
			.headers(headers_7),
            http("request_32")
			.get("/api/challenges/recgPPjKpxqAMaAeX")
			.headers(headers_7),
            http("request_33")
			.get("/api/challenges/recfWAcyZCsLg3yrb")
			.headers(headers_7),
            http("request_34")
			.get("/api/challenges/recopA530N2rlxYLt")
			.headers(headers_7),
            http("request_35")
			.get("/api/challenges/recttWm9LAfDeqcxk")
			.headers(headers_7),
            http("request_36")
			.get("/api/challenges/rec9M8rp0Y8uDWzKQ")
			.headers(headers_7),
            http("request_37")
			.get("/api/challenges/recb35pFRQyyXzZUM")
			.headers(headers_7),
            http("request_38")
			.get("/api/challenges/recCIGio3ASSocMXx")
			.headers(headers_7),
            http("request_39")
			.get("/api/challenges/rec5WobQ3QkC07jt4")
			.headers(headers_7),
            http("request_40")
			.get("/api/challenges/recyRNeHrvhUBgunU")
			.headers(headers_7),
            http("request_41")
			.get("/api/challenges/recyNr3bZvwZNY3Is")
			.headers(headers_7),
            http("request_42")
			.get("/api/challenges/recin0ZPtJyNNrBoy")
			.headers(headers_7),
            http("request_43")
			.get("/api/challenges/recr6dEmRR24Y4DqO")
			.headers(headers_7),
            http("request_44")
			.get("/api/challenges/recceHsyX1AnV3kdW")
			.headers(headers_7),
            http("request_45")
			.get("/api/challenges/recCI6TqfMF8isLhp")
			.headers(headers_7),
            http("request_46")
			.get("/api/challenges/rec7Mxf1sJtM6arxn")
			.headers(headers_7),
            http("request_47")
			.get("/api/challenges/rec18uKPBdNiCoj5o")
			.headers(headers_7),
            http("request_48")
			.get("/api/challenges/recNrZgtDdxDJUyGc")
			.headers(headers_7),
            http("request_49")
			.get("/api/challenges/rec2cTjc7hEVgLov8")
			.headers(headers_7),
            http("request_50")
			.get("/api/challenges/recnG44mATYoymcZQ")
			.headers(headers_7),
            http("request_51")
			.get("/api/challenges/recc4uJS8p5RZJFzT")
			.headers(headers_7),
            http("request_52")
			.get("/api/challenges/recuOF3usxmx6paw8")
			.headers(headers_7),
            http("request_53")
			.get("/api/challenges/rec9OW8LijTWUpQOL")
			.headers(headers_7),
            http("request_54")
			.get("/api/challenges/rec0I61XwUNnPBs0e")
			.headers(headers_7),
            http("request_55")
			.get("/api/challenges/rectcCOXbKJT3ottj")
			.headers(headers_7),
            http("request_56")
			.get("/api/challenges/recT8Oo8DO2SZzfvt")
			.headers(headers_7),
            http("request_57")
			.get("/api/challenges/recmq4n2sGb1NQjaL")
			.headers(headers_7),
            http("request_58")
			.get("/api/challenges/recSCxxKQyeJ2Xclz")
			.headers(headers_7),
            http("request_59")
			.get("/api/challenges/recZrLmQJA99edXFx")
			.headers(headers_7),
            http("request_60")
			.get("/api/challenges/recfkbA38mMqCyR2k")
			.headers(headers_7),
            http("request_61")
			.get("/images/course-default-image.png")
			.headers(headers_5),
            http("request_62")
			.get("/api/challenges/rec6bbY8bcMULxLQp")
			.headers(headers_7),
            http("request_63")
			.get("/api/challenges/recrbFNJOXSxzJrOV")
			.headers(headers_7),
            http("request_64")
			.get("/api/challenges/recJNKVofqg4Dw19J")
			.headers(headers_7),
            http("request_65")
			.get("/api/challenges/recLt9uwa2dR3IYpi")
			.headers(headers_7)))
		.pause(11)
		.exec(http("request_66")
			.post("/api/assessments")
			.headers(headers_66)
			.body(RawFileBody("RecordedSimulation_0066_request.txt"))
			.resources(http("request_67")
			.get("/api/courses/recgCojOs6ykwak43")
			.headers(headers_7)))
		.pause(6)
		.exec(http("request_68")
			.post("/api/answers")
			.headers(headers_66)
			.body(RawFileBody("RecordedSimulation_0068_request.txt"))
			.resources(http("request_69")
			.get("/fonts/glyphicons-halflings-regular.woff2")
			.headers(headers_69)))
		.pause(3)
		.exec(http("request_70")
			.post("/api/answers")
			.headers(headers_66)
			.body(RawFileBody("RecordedSimulation_0070_request.txt")))
		.pause(2)
		.exec(http("request_71")
			.post("/api/answers")
			.headers(headers_66)
			.body(RawFileBody("RecordedSimulation_0071_request.txt")))
		.pause(2)
		.exec(http("request_72")
			.post("/api/answers")
			.headers(headers_66)
			.body(RawFileBody("RecordedSimulation_0072_request.txt")))
		.pause(4)
		.exec(http("request_73")
			.post("/api/answers")
			.headers(headers_66)
			.body(RawFileBody("RecordedSimulation_0073_request.txt")))
		.pause(6)
		.exec(http("request_74")
			.get("/api/courses")
			.headers(headers_7))

	setUp(
		scn.inject(atOnceUsers(100))
	).protocols(httpProtocol)
}
