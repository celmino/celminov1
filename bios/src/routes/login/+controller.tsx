import { GithubBroker, QdmsBroker, Services, useCreateEmailSession, useGetMe, useUpdateName, GooleDriveBroker, JiraBroker, MiningBroker } from "@realmocean/sdk";
import { Fragment, HDivider, HStack, Heading, Icon, ReactView, SecureField, Spacer, Text, TextField, UINavigate, UIView, VStack, cLeading, cTop, useNavigate, useState } from "@tuval/forms";
import React from "react";
import { CelminoController, Guard } from "../../CelminoController";
//import { Secrets } from "./mysecret";

const LeftLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="207" viewBox="0 0 1000 207">
        <g transform="matrix(1,0,0,1,-0.6060605238602648,-0.3879324329129332)"><svg viewBox="0 0 396 82" data-background-color="#ffffff" preserveAspectRatio="xMidYMid meet" height="207" width="1000"><g id="tight-bounds" transform="matrix(1,0,0,1,0.24000003255142133,0.15367371738580005)"><svg viewBox="0 0 395.5199999999999 81.69265256522837" height="81.69265256522837" width="395.5199999999999"><g><svg viewBox="0 0 461.5680879257202 95.33455057168447" height="81.69265256522837" width="395.5199999999999"><g><svg viewBox="0 0 461.5680879257202 95.33455057168447" height="95.33455057168447" width="461.5680879257202"><g id="textblocktransform"><svg viewBox="0 0 461.5680879257202 95.33455057168447" height="95.33455057168447" width="461.5680879257202" id="textblock"><g><svg viewBox="0 0 461.5680879257202 58.89519999999999" height="58.89519999999999" width="461.5680879257202"><g><svg><g></g><g></g></svg></g>
            <g><svg><g><svg></svg></g>
                <g></g>
            </svg>
            </g>
            <g id="text-0"><svg viewBox="0 0 461.5680879257202 58.89519999999999" height="58.89519999999999" width="461.5680879257202"><g transform="matrix(1,0,0,1,0,0.45076616314199214)"><svg width="395.52" viewBox="1.7000000476837158 -35.900001525878906 248.24000549316406 36.400001525878906" height="57.993667673716004" data-palette-color="#233565"><path d="M19.7 0.5L19.7 0.5Q16.25 0.5 13.03-0.3 9.8-1.1 7.25-3.1 4.7-5.1 3.2-8.65 1.7-12.2 1.7-17.7L1.7-17.7Q1.7-22.65 3.15-26.13 4.6-29.6 7.1-31.75 9.6-33.9 12.85-34.9 16.1-35.9 19.7-35.9L19.7-35.9Q22.25-35.9 24.68-35.5 27.1-35.1 28.2-34.6L28.2-34.6 34.25-29.55 29.25-21.3 19.7-25.7Q18-25.7 16.53-24.78 15.05-23.85 14.13-22.08 13.2-20.3 13.2-17.7L13.2-17.7Q13.2-14.4 14.23-12.63 15.25-10.85 17.18-10.2 19.1-9.55 21.75-9.55L21.75-9.55Q24.3-9.55 26.58-10.08 28.85-10.6 30.6-11.3 32.35-12 33.25-12.5L33.25-12.5 33.25-2.5Q32.25-2 30.43-1.28 28.6-0.55 25.93-0.03 23.25 0.5 19.7 0.5ZM67.7 0L39.75 0 38.75-3 39.75-8 39.75-35.4 65.5-35.4 68-33.9 64.7-25.4 60.2-25.9 50.85-25.9 50.85-21.9 63.2-21.9 63.2-13.65 56.3-13.65 50.85-14.15 50.85-9.5 64.7-9.5 70.65-3.2 67.7 0ZM100.6 0L74.65 0 73.65-3 74.65-8 74.65-35.4 85.65-35.4 85.65-16.35 85.15-9.5 86.15-9.5 95.1-10 98.65-10.5 103.05-3.2 100.6 0ZM118.74 0L107.04 0 107.04-27.35 106.04-32.35 107.09-35.35 118.74-35.35 128.54-17.85 129.54-17.85 137.64-35.35 149.59-35.35 150.09-32.35 149.59-27.55 149.59 0 138.54 0 138.69-4.25 138.69-18.2 138.14-18.2 136.24-12.95 132.64-5 124.64-5 118.74-18.2 118.24-18.2 118.24-14.15 118.74 0ZM167.64 0L156.59 0 156.59-27.4 156.09-32.4 156.59-35.4 167.64-35.4 167.64 0ZM186.24 0L174.64 0 174.64-27.35 173.64-32.35 174.64-35.35 184.69-35.35 194.79-22.75 197.19-18.6 197.69-18.6 197.69-35.35 209.24-35.35 209.24-32.35 208.74-27.35 208.74 0 198.79 0 186.24-17.1 185.74-17.1 185.74-14.1 186.24 0ZM231.94 0.5L231.94 0.5Q228.74 0.5 225.56-0.28 222.39-1.05 219.76-3.05 217.14-5.05 215.54-8.6 213.94-12.15 213.94-17.7L213.94-17.7Q213.94-23.25 215.54-26.8 217.14-30.35 219.76-32.35 222.39-34.35 225.56-35.13 228.74-35.9 231.94-35.9L231.94-35.9Q235.14-35.9 238.31-35.1 241.49-34.3 244.11-32.3 246.74-30.3 248.34-26.75 249.94-23.2 249.94-17.7L249.94-17.7Q249.94-12.2 248.34-8.65 246.74-5.1 244.11-3.1 241.49-1.1 238.31-0.3 235.14 0.5 231.94 0.5ZM231.94-9.5L231.94-9.5Q235.19-9.5 236.84-11.48 238.49-13.45 238.49-17.7L238.49-17.7Q238.49-21.9 236.84-23.9 235.19-25.9 231.94-25.9L231.94-25.9Q225.44-25.9 225.44-17.7L225.44-17.7Q225.44-13.5 227.06-11.5 228.69-9.5 231.94-9.5Z" opacity="1" transform="matrix(1,0,0,1,0,0)" fill="#233565" data-fill-palette-color="primary"></path></svg></g>
                <g><svg xmlns="http://www.w3.org/2000/svg" data-name="Glyph Icon" viewBox="7.210000038146973 4 49.58000183105469 56" x="409.4248" y="0" height="58.89519999999999" width="52.14328792572021" data-fill-palette-color="accent" id="s-0"><path d="M49.13 20.84l-16-9.26V4L55.7 17.05ZM32 50.52L16 41.26V22.74l16-9.26 16 9.26V41.26ZM30.91 11.58l-16 9.26L8.3 17.05 30.91 4ZM13.77 22.74V41.26L7.21 45.05V19Zm1.1 20.42l16 9.26V60L8.3 47Zm18.22 9.26l16-9.26L55.7 47 33.09 60ZM50.23 41.26V22.74L56.79 19v26.1Z" fill="#8bd8bc" data-fill-palette-color="accent"></path></svg></g>
            </svg>
            </g>
        </svg>
        </g>
            <g transform="matrix(1,0,0,1,88.15950479381254,72.58611308974017)"><svg viewBox="0 0 285.2490783380951 22.74843748194431" height="22.74843748194431" width="285.2490783380951"><g transform="matrix(1,0,0,1,0,0)"><svg width="285.2490783380951" viewBox="1.149999976158142 -38.04999923706055 646.3499755859375 51.54999923706055" height="22.74843748194431" data-palette-color="#233565"><path d="M42.75-34.85L47.65-34.85 37.55 0 32.45 0 24.35-28.05 15.95 0 10.9 0.05 1.15-34.85 6-34.85 13.6-5.3 22-34.85 27.1-34.85 35.1-5.4 42.75-34.85ZM64.6 0.45Q60.75 0.45 57.62-1.3 54.5-3.05 52.72-6.28 50.95-9.5 50.95-13.75L50.95-13.75Q50.95-17.95 52.77-21.18 54.6-24.4 57.75-26.13 60.9-27.85 64.8-27.85L64.8-27.85Q68.7-27.85 71.85-26.13 75-24.4 76.82-21.2 78.65-18 78.65-13.75L78.65-13.75Q78.65-9.5 76.77-6.28 74.9-3.05 71.7-1.3 68.5 0.45 64.6 0.45L64.6 0.45ZM64.6-3.55Q67.05-3.55 69.2-4.7 71.35-5.85 72.67-8.15 74-10.45 74-13.75L74-13.75Q74-17.05 72.7-19.35 71.4-21.65 69.3-22.78 67.2-23.9 64.75-23.9L64.75-23.9Q62.25-23.9 60.17-22.78 58.1-21.65 56.85-19.35 55.6-17.05 55.6-13.75L55.6-13.75Q55.6-10.4 56.82-8.1 58.05-5.8 60.1-4.67 62.15-3.55 64.6-3.55L64.6-3.55ZM89.2-22.95Q90.4-25.3 92.62-26.6 94.85-27.9 98.05-27.9L98.05-27.9 98.05-23.2 96.85-23.2Q89.2-23.2 89.2-14.9L89.2-14.9 89.2 0 84.65 0 84.65-27.4 89.2-27.4 89.2-22.95ZM124.79 0L118.59 0 107.84-12.1 107.84 0 103.29 0 103.29-37 107.84-37 107.84-15.25 118.39-27.4 124.74-27.4 111.84-13.75 124.79 0ZM172.89-34.6L177.74-34.6 177.74 0 173.19 0 173.19-25.8 161.69 0 158.49 0 146.94-25.85 146.94 0 142.39 0 142.39-34.6 147.29-34.6 160.09-6 172.89-34.6ZM183.74-13.8Q183.74-18 185.44-21.18 187.14-24.35 190.11-26.1 193.09-27.85 196.74-27.85L196.74-27.85Q200.34-27.85 202.99-26.3 205.64-24.75 206.94-22.4L206.94-22.4 206.94-27.4 211.54-27.4 211.54 0 206.94 0 206.94-5.1Q205.59-2.7 202.91-1.13 200.24 0.45 196.69 0.45L196.69 0.45Q193.04 0.45 190.09-1.35 187.14-3.15 185.44-6.4 183.74-9.65 183.74-13.8L183.74-13.8ZM206.94-13.75Q206.94-16.85 205.69-19.15 204.44-21.45 202.31-22.68 200.19-23.9 197.64-23.9L197.64-23.9Q195.09-23.9 192.99-22.7 190.89-21.5 189.64-19.2 188.39-16.9 188.39-13.8L188.39-13.8Q188.39-10.65 189.64-8.33 190.89-6 192.99-4.78 195.09-3.55 197.64-3.55L197.64-3.55Q200.19-3.55 202.31-4.78 204.44-6 205.69-8.33 206.94-10.65 206.94-13.75L206.94-13.75ZM232.58-27.9Q237.58-27.9 240.68-24.88 243.78-21.85 243.78-16.15L243.78-16.15 243.78 0 239.28 0 239.28-15.5Q239.28-19.6 237.23-21.78 235.18-23.95 231.63-23.95L231.63-23.95Q228.03-23.95 225.91-21.7 223.78-19.45 223.78-15.15L223.78-15.15 223.78 0 219.23 0 219.23-27.4 223.78-27.4 223.78-23.5Q225.13-25.6 227.46-26.75 229.78-27.9 232.58-27.9L232.58-27.9ZM249.53-13.8Q249.53-18 251.23-21.18 252.93-24.35 255.91-26.1 258.88-27.85 262.53-27.85L262.53-27.85Q266.13-27.85 268.78-26.3 271.43-24.75 272.73-22.4L272.73-22.4 272.73-27.4 277.33-27.4 277.33 0 272.73 0 272.73-5.1Q271.38-2.7 268.71-1.13 266.03 0.45 262.48 0.45L262.48 0.45Q258.83 0.45 255.88-1.35 252.93-3.15 251.23-6.4 249.53-9.65 249.53-13.8L249.53-13.8ZM272.73-13.75Q272.73-16.85 271.48-19.15 270.23-21.45 268.11-22.68 265.98-23.9 263.43-23.9L263.43-23.9Q260.88-23.9 258.78-22.7 256.68-21.5 255.43-19.2 254.18-16.9 254.18-13.8L254.18-13.8Q254.18-10.65 255.43-8.33 256.68-6 258.78-4.78 260.88-3.55 263.43-3.55L263.43-3.55Q265.98-3.55 268.11-4.78 270.23-6 271.48-8.33 272.73-10.65 272.73-13.75L272.73-13.75ZM296.33-27.85Q299.88-27.85 302.55-26.3 305.23-24.75 306.53-22.4L306.53-22.4 306.53-27.4 311.13-27.4 311.13 0.6Q311.13 4.35 309.53 7.28 307.93 10.2 304.95 11.85 301.98 13.5 298.03 13.5L298.03 13.5Q292.63 13.5 289.03 10.95 285.43 8.4 284.78 4L284.78 4 289.28 4Q290.03 6.5 292.38 8.03 294.73 9.55 298.03 9.55L298.03 9.55Q301.78 9.55 304.15 7.2 306.53 4.85 306.53 0.6L306.53 0.6 306.53-5.15Q305.18-2.75 302.53-1.15 299.88 0.45 296.33 0.45L296.33 0.45Q292.68 0.45 289.7-1.35 286.73-3.15 285.03-6.4 283.33-9.65 283.33-13.8L283.33-13.8Q283.33-18 285.03-21.18 286.73-24.35 289.7-26.1 292.68-27.85 296.33-27.85L296.33-27.85ZM306.53-13.75Q306.53-16.85 305.28-19.15 304.03-21.45 301.9-22.68 299.78-23.9 297.23-23.9L297.23-23.9Q294.68-23.9 292.58-22.7 290.48-21.5 289.23-19.2 287.98-16.9 287.98-13.8L287.98-13.8Q287.98-10.65 289.23-8.33 290.48-6 292.58-4.78 294.68-3.55 297.23-3.55L297.23-3.55Q299.78-3.55 301.9-4.78 304.03-6 305.28-8.33 306.53-10.65 306.53-13.75L306.53-13.75ZM343.83-14.75Q343.83-13.45 343.68-12L343.68-12 321.78-12Q322.03-7.95 324.55-5.68 327.08-3.4 330.68-3.4L330.68-3.4Q333.63-3.4 335.6-4.78 337.58-6.15 338.38-8.45L338.38-8.45 343.28-8.45Q342.18-4.5 338.88-2.02 335.58 0.45 330.68 0.45L330.68 0.45Q326.78 0.45 323.7-1.3 320.63-3.05 318.88-6.28 317.13-9.5 317.13-13.75L317.13-13.75Q317.13-18 318.83-21.2 320.53-24.4 323.6-26.13 326.68-27.85 330.68-27.85L330.68-27.85Q334.58-27.85 337.58-26.15 340.58-24.45 342.2-21.48 343.83-18.5 343.83-14.75L343.83-14.75ZM339.13-15.7Q339.13-18.3 337.98-20.18 336.83-22.05 334.85-23.03 332.88-24 330.48-24L330.48-24Q327.03-24 324.6-21.8 322.18-19.6 321.83-15.7L321.83-15.7 339.13-15.7ZM382.77-27.9Q385.97-27.9 388.47-26.58 390.97-25.25 392.42-22.6 393.87-19.95 393.87-16.15L393.87-16.15 393.87 0 389.37 0 389.37-15.5Q389.37-19.6 387.35-21.78 385.32-23.95 381.87-23.95L381.87-23.95Q378.32-23.95 376.22-21.68 374.12-19.4 374.12-15.1L374.12-15.1 374.12 0 369.62 0 369.62-15.5Q369.62-19.6 367.6-21.78 365.57-23.95 362.12-23.95L362.12-23.95Q358.57-23.95 356.47-21.68 354.37-19.4 354.37-15.1L354.37-15.1 354.37 0 349.82 0 349.82-27.4 354.37-27.4 354.37-23.45Q355.72-25.6 358-26.75 360.27-27.9 363.02-27.9L363.02-27.9Q366.47-27.9 369.12-26.35 371.77-24.8 373.07-21.8L373.07-21.8Q374.22-24.7 376.87-26.3 379.52-27.9 382.77-27.9L382.77-27.9ZM426.32-14.75Q426.32-13.45 426.17-12L426.17-12 404.27-12Q404.52-7.95 407.05-5.68 409.57-3.4 413.17-3.4L413.17-3.4Q416.12-3.4 418.1-4.78 420.07-6.15 420.87-8.45L420.87-8.45 425.77-8.45Q424.67-4.5 421.37-2.02 418.07 0.45 413.17 0.45L413.17 0.45Q409.27 0.45 406.2-1.3 403.12-3.05 401.37-6.28 399.62-9.5 399.62-13.75L399.62-13.75Q399.62-18 401.32-21.2 403.02-24.4 406.1-26.13 409.17-27.85 413.17-27.85L413.17-27.85Q417.07-27.85 420.07-26.15 423.07-24.45 424.7-21.48 426.32-18.5 426.32-14.75L426.32-14.75ZM421.62-15.7Q421.62-18.3 420.47-20.18 419.32-22.05 417.35-23.03 415.37-24 412.97-24L412.97-24Q409.52-24 407.1-21.8 404.67-19.6 404.32-15.7L404.32-15.7 421.62-15.7ZM445.67-27.9Q450.67-27.9 453.77-24.88 456.87-21.85 456.87-16.15L456.87-16.15 456.87 0 452.37 0 452.37-15.5Q452.37-19.6 450.32-21.78 448.27-23.95 444.72-23.95L444.72-23.95Q441.12-23.95 438.99-21.7 436.87-19.45 436.87-15.15L436.87-15.15 436.87 0 432.32 0 432.32-27.4 436.87-27.4 436.87-23.5Q438.22-25.6 440.54-26.75 442.87-27.9 445.67-27.9L445.67-27.9ZM477.02-23.65L469.87-23.65 469.87-7.5Q469.87-5.5 470.72-4.67 471.57-3.85 473.67-3.85L473.67-3.85 477.02-3.85 477.02 0 472.92 0Q469.12 0 467.22-1.75 465.32-3.5 465.32-7.5L465.32-7.5 465.32-23.65 461.77-23.65 461.77-27.4 465.32-27.4 465.32-34.3 469.87-34.3 469.87-27.4 477.02-27.4 477.02-23.65ZM506.91 0.35Q503.46 0.35 500.74-0.88 498.01-2.1 496.46-4.28 494.91-6.45 494.86-9.3L494.86-9.3 499.71-9.3Q499.96-6.85 501.74-5.18 503.51-3.5 506.91-3.5L506.91-3.5Q510.16-3.5 512.04-5.13 513.91-6.75 513.91-9.3L513.91-9.3Q513.91-11.3 512.81-12.55 511.71-13.8 510.06-14.45 508.41-15.1 505.61-15.85L505.61-15.85Q502.16-16.75 500.09-17.65 498.01-18.55 496.54-20.48 495.06-22.4 495.06-25.65L495.06-25.65Q495.06-28.5 496.51-30.7 497.96-32.9 500.59-34.1 503.21-35.3 506.61-35.3L506.61-35.3Q511.51-35.3 514.64-32.85 517.76-30.4 518.16-26.35L518.16-26.35 513.16-26.35Q512.91-28.35 511.06-29.88 509.21-31.4 506.16-31.4L506.16-31.4Q503.31-31.4 501.51-29.93 499.71-28.45 499.71-25.8L499.71-25.8Q499.71-23.9 500.79-22.7 501.86-21.5 503.44-20.88 505.01-20.25 507.86-19.45L507.86-19.45Q511.31-18.5 513.41-17.57 515.51-16.65 517.01-14.73 518.51-12.8 518.51-9.5L518.51-9.5Q518.51-6.95 517.16-4.7 515.81-2.45 513.16-1.05 510.51 0.35 506.91 0.35L506.91 0.35ZM537.91-23.65L530.76-23.65 530.76-7.5Q530.76-5.5 531.61-4.67 532.46-3.85 534.56-3.85L534.56-3.85 537.91-3.85 537.91 0 533.81 0Q530.01 0 528.11-1.75 526.21-3.5 526.21-7.5L526.21-7.5 526.21-23.65 522.66-23.65 522.66-27.4 526.21-27.4 526.21-34.3 530.76-34.3 530.76-27.4 537.91-27.4 537.91-23.65ZM563.16-27.4L567.71-27.4 567.71 0 563.16 0 563.16-4.05Q561.86-1.95 559.53-0.78 557.21 0.4 554.41 0.4L554.41 0.4Q551.21 0.4 548.66-0.93 546.11-2.25 544.63-4.9 543.16-7.55 543.16-11.35L543.16-11.35 543.16-27.4 547.66-27.4 547.66-11.95Q547.66-7.9 549.71-5.73 551.76-3.55 555.31-3.55L555.31-3.55Q558.96-3.55 561.06-5.8 563.16-8.05 563.16-12.35L563.16-12.35 563.16-27.4ZM573.7-13.8Q573.7-18 575.4-21.18 577.1-24.35 580.08-26.1 583.05-27.85 586.75-27.85L586.75-27.85Q589.95-27.85 592.7-26.38 595.45-24.9 596.9-22.5L596.9-22.5 596.9-37 601.5-37 601.5 0 596.9 0 596.9-5.15Q595.55-2.7 592.9-1.13 590.25 0.45 586.7 0.45L586.7 0.45Q583.05 0.45 580.08-1.35 577.1-3.15 575.4-6.4 573.7-9.65 573.7-13.8L573.7-13.8ZM596.9-13.75Q596.9-16.85 595.65-19.15 594.4-21.45 592.28-22.68 590.15-23.9 587.6-23.9L587.6-23.9Q585.05-23.9 582.95-22.7 580.85-21.5 579.6-19.2 578.35-16.9 578.35-13.8L578.35-13.8Q578.35-10.65 579.6-8.33 580.85-6 582.95-4.78 585.05-3.55 587.6-3.55L587.6-3.55Q590.15-3.55 592.28-4.78 594.4-6 595.65-8.33 596.9-10.65 596.9-13.75L596.9-13.75ZM611.55-31.85Q610.25-31.85 609.35-32.75 608.45-33.65 608.45-34.95L608.45-34.95Q608.45-36.25 609.35-37.15 610.25-38.05 611.55-38.05L611.55-38.05Q612.8-38.05 613.67-37.15 614.55-36.25 614.55-34.95L614.55-34.95Q614.55-33.65 613.67-32.75 612.8-31.85 611.55-31.85L611.55-31.85ZM609.2-27.4L613.75-27.4 613.75 0 609.2 0 609.2-27.4ZM633.45 0.45Q629.6 0.45 626.47-1.3 623.35-3.05 621.57-6.28 619.8-9.5 619.8-13.75L619.8-13.75Q619.8-17.95 621.62-21.18 623.45-24.4 626.6-26.13 629.75-27.85 633.65-27.85L633.65-27.85Q637.55-27.85 640.7-26.13 643.85-24.4 645.67-21.2 647.5-18 647.5-13.75L647.5-13.75Q647.5-9.5 645.62-6.28 643.75-3.05 640.55-1.3 637.35 0.45 633.45 0.45L633.45 0.45ZM633.45-3.55Q635.9-3.55 638.05-4.7 640.2-5.85 641.52-8.15 642.85-10.45 642.85-13.75L642.85-13.75Q642.85-17.05 641.55-19.35 640.25-21.65 638.15-22.78 636.05-23.9 633.6-23.9L633.6-23.9Q631.1-23.9 629.02-22.78 626.95-21.65 625.7-19.35 624.45-17.05 624.45-13.75L624.45-13.75Q624.45-10.4 625.67-8.1 626.9-5.8 628.95-4.67 631-3.55 633.45-3.55L633.45-3.55Z" opacity="1" transform="matrix(1,0,0,1,0,0)" fill="#233565" data-fill-palette-color="secondary" id="text-1"></path></svg></g>
            </svg>
            </g>
        </svg>
        </g>
        </svg>
        </g>
            <g></g>
        </svg>
        </g>
            <defs></defs>
        </svg>
            <rect width="395.5199999999999" height="81.69265256522837" fill="none" stroke="none" visibility="hidden"></rect>
        </g>
        </svg>
        </g>
    </svg>
)

const GoogleLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M24 12.2755C24 11.4598 23.9325 10.6397 23.7885 9.83716H12.2406V14.4581H18.8536C18.5791 15.9485 17.6974 17.2669 16.4063 18.1047V21.103H20.3516C22.6684 19.013 24 15.9264 24 12.2755Z" fill="#4285F4"></path><path d="M12.2408 23.9999C15.5427 23.9999 18.3274 22.9373 20.3562 21.103L16.4109 18.1046C15.3133 18.8366 13.8962 19.2511 12.2453 19.2511C9.05125 19.2511 6.3431 17.139 5.3714 14.2994H1.30017V17.3903C3.37852 21.4425 7.6117 23.9999 12.2408 23.9999Z" fill="#34A853"></path><path d="M5.36688 14.2995C4.85404 12.8091 4.85404 11.1953 5.36688 9.70496V6.61401H1.30015C-0.436312 10.0048 -0.436312 13.9996 1.30015 17.3904L5.36688 14.2995Z" fill="#FBBC04"></path><path d="M12.2407 4.74881C13.9862 4.72235 15.6732 5.36611 16.9373 6.54781L20.4327 3.12176C18.2194 1.08465 15.2818 -0.0353205 12.2407 -4.58262e-05C7.61169 -4.58262e-05 3.37852 2.55737 1.30017 6.61395L5.36689 9.7049C6.33409 6.86088 9.04674 4.74881 12.2407 4.74881Z" fill="#EA4335"></path></g><defs>
        <clipPath id="clip0"><rect width="24" height="24" fill="white"></rect></clipPath>
    </defs></svg>
)

const MicrosoftLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5352 0.929382H0.929321V11.5353H11.5352V0.929382Z" fill="#F35325"></path><path d="M23.0707 0.929382H12.4647V11.5353H23.0707V0.929382Z" fill="#81BC06"></path><path d="M11.5352 12.4647H0.929321V23.0707H11.5352V12.4647Z" fill="#05A6F0"></path><path d="M23.0707 12.4647H12.4647V23.0707H23.0707V12.4647Z" fill="#FFBA08"></path></svg>
)

/* 

http://localhost:4200/landing?query=1#2

window.location.hash: "#2"
​
window.location.host: "localhost:4200"
​
window.location.hostname: "localhost"
​
window.location.href: "http://localhost:4200/landing?query=1#2"
​
window.location.origin: "http://localhost:4200"
​
window.location.pathname: "/landing"
​
window.location.port: "4200"
​
window.location.protocol: "http:"

window.location.search: "?query=1" 

var subDomain = /:\/\/([^\/]+)/.exec(window.location.href)[1];
*/



export class LoginController extends CelminoController {
    public override LoadView(): UIView {


        const { me, isLoading, isError: isAccountError } = useGetMe('console');

        const navigate = useNavigate();
        const { createEmailSession, isSuccess, isError, error } = useCreateEmailSession('console');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const { updateName } = useUpdateName('console');

        return (
            isLoading ? Fragment() : !isAccountError ? UINavigate('/app/login-success')
                :
                VStack(
                    VStack({ alignment: cTop })(
                        HStack(
                            ReactView(
                                <LeftLogo></LeftLogo>
                            )
                        ).width('20%').height()
                            .position('absolute')
                            .left('0px').top('0px')
                            .cursor('pointer')
                            .onClick(() => {
                                navigate('/')
                            }),
                        VStack(
                            HStack(
                                Heading('Sign in').fontSize('6rem').foregroundColor('#090e13').lineHeight('1.4')
                                    .fontFamily('"Hagrid", sans-serif')
                            ).height().marginBottom('.7rem'),
                            VStack({ spacing: 20 })(

                                HStack({ spacing: 10 })(
                                    Icon(GoogleLogo),
                                    Text('Sign in with Google').fontFamily('"Graphik Regular", sans-serif').fontSize('2rem')
                                ).height(48).width('100%')
                                    .minWidth('32rem')
                                    .maxWidth('40rem')
                                    .marginBottom('2rem')
                                    .cursor('pointer')
                                    .background('white')
                                    .shadow({ hover: '0 4px 16px rgba(0, 0, 0, 0.1)' })
                                    .onClick(() => {
                                        Services.Accounts.createOAuth2Session(
                                            "google",
                                            `${window.location.protocol}//${window.location.host}/app/login-success`,
                                            `${window.location.protocol}//${window.location.host}/login-failure`
                                        )

                                    }),
                                HStack({ spacing: 10 })(
                                    Icon(MicrosoftLogo),
                                    Text('Sign in with Microsoft').fontFamily('"Graphik Regular", sans-serif').fontSize(20)
                                ).height(48).width('100%')
                                    .minWidth('32rem')
                                    .maxWidth('40rem')
                                    .cursor('pointer')
                                    .background('white')
                                    .shadow({ hover: '0 4px 16px rgba(0, 0, 0, 0.1)' })
                                    .onClick(() => {
                                        Services.Accounts.createOAuth2Session(
                                            "microsoft",
                                            `${window.location.protocol}//${window.location.host}/app/login-success`,
                                            `${window.location.protocol}//${window.location.host}/login-failure`
                                        )

                                    }),
                            ).height().width().paddingTop('3rem'),
                            VStack({ alignment: cLeading })(
                                HStack(
                                    HDivider().height(1).background('rgba(125, 141, 154, 0.1)'),
                                    Text('OR').padding('0 20px'),
                                    HDivider().height(1).background('rgba(125, 141, 154, 0.1)')

                                ).padding('2.4rem 0').maxWidth('40rem').height(),
                                VStack({ alignment: cLeading, spacing: 10 })(

                                    TextField().fontSize('1.8rem')
                                        .allHeight(40)
                                        //  .placeholder('Enter your email')
                                        .transition('all 0.3s ease-in-out')
                                        .border('none')
                                        .borderBottom({ hover: '2px solid #162330' })
                                        .background('white')
                                        .outline({ focus: 'none' })
                                        .padding('0 1.5rem').width(332)
                                        .onChange(e => setEmail(e))
                                ).height().marginBottom('1.5rem'),
                                VStack({ alignment: cLeading, spacing: 10 })(

                                    SecureField().fontSize(16).padding(10)
                                        .onChange(e => setPassword(e))
                                ).height()
                                    .marginBottom('1.5rem'),
                                VStack({ alignment: cLeading, spacing: 10 })(
                                    HStack(
                                        Text('Sign in with email')
                                            .fontFamily('"Graphik Regular", sans-serif')

                                            .fontSize('2rem')
                                    )
                                        .height()
                                        .cursor('pointer')
                                        .lineHeight('4.8rem')
                                        .padding('0 5rem')
                                        .background('#242938')
                                        .cornerRadius(3)
                                        .foregroundColor('white')
                                        .onClick(async () => {

                                            const a : any= await MiningBroker.Default.loadCsv(`Activity,Costs,Resource,case:concept:name,case:creator,concept:name,org:resource,time:timestamp
                                            register request,50,Pete,3,Fluxicon Nitro,register request,Pete,2010-12-30 14:32:00+01:00
                                            examine casually,400,Mike,3,Fluxicon Nitro,examine casually,Mike,2010-12-30 15:06:00+01:00
                                            check ticket,100,Ellen,3,Fluxicon Nitro,check ticket,Ellen,2010-12-30 16:34:00+01:00
                                            decide,200,Sara,3,Fluxicon Nitro,decide,Sara,2011-01-06 09:18:00+01:00
                                            reinitiate request,200,Sara,3,Fluxicon Nitro,reinitiate request,Sara,2011-01-06 12:18:00+01:00
                                            examine thoroughly,400,Sean,3,Fluxicon Nitro,examine thoroughly,Sean,2011-01-06 13:06:00+01:00
                                            check ticket,100,Pete,3,Fluxicon Nitro,check ticket,Pete,2011-01-08 11:43:00+01:00
                                            decide,200,Sara,3,Fluxicon Nitro,decide,Sara,2011-01-09 09:55:00+01:00
                                            pay compensation,200,Ellen,3,Fluxicon Nitro,pay compensation,Ellen,2011-01-15 10:45:00+01:00
                                            register request,50,Mike,2,Fluxicon Nitro,register request,Mike,2010-12-30 11:32:00+01:00
                                            check ticket,100,Mike,2,Fluxicon Nitro,check ticket,Mike,2010-12-30 12:12:00+01:00
                                            examine casually,400,Sean,2,Fluxicon Nitro,examine casually,Sean,2010-12-30 14:16:00+01:00
                                            decide,200,Sara,2,Fluxicon Nitro,decide,Sara,2011-01-05 11:22:00+01:00
                                            pay compensation,200,Ellen,2,Fluxicon Nitro,pay compensation,Ellen,2011-01-08 12:05:00+01:00
                                            register request,50,Pete,1,Fluxicon Nitro,register request,Pete,2010-12-30 11:02:00+01:00
                                            examine thoroughly,400,Sue,1,Fluxicon Nitro,examine thoroughly,Sue,2010-12-31 10:06:00+01:00
                                            check ticket,100,Mike,1,Fluxicon Nitro,check ticket,Mike,2011-01-05 15:12:00+01:00
                                            decide,200,Sara,1,Fluxicon Nitro,decide,Sara,2011-01-06 11:18:00+01:00
                                            reject request,200,Pete,1,Fluxicon Nitro,reject request,Pete,2011-01-07 14:24:00+01:00
                                            register request,50,Mike,6,Fluxicon Nitro,register request,Mike,2011-01-06 15:02:00+01:00
                                            examine casually,400,Ellen,6,Fluxicon Nitro,examine casually,Ellen,2011-01-06 16:06:00+01:00
                                            check ticket,100,Mike,6,Fluxicon Nitro,check ticket,Mike,2011-01-07 16:22:00+01:00
                                            decide,200,Sara,6,Fluxicon Nitro,decide,Sara,2011-01-07 16:52:00+01:00
                                            pay compensation,200,Mike,6,Fluxicon Nitro,pay compensation,Mike,2011-01-16 11:47:00+01:00
                                            register request,50,Ellen,5,Fluxicon Nitro,register request,Ellen,2011-01-06 09:02:00+01:00
                                            examine casually,400,Mike,5,Fluxicon Nitro,examine casually,Mike,2011-01-07 10:16:00+01:00
                                            check ticket,100,Pete,5,Fluxicon Nitro,check ticket,Pete,2011-01-08 11:22:00+01:00
                                            decide,200,Sara,5,Fluxicon Nitro,decide,Sara,2011-01-10 13:28:00+01:00
                                            reinitiate request,200,Sara,5,Fluxicon Nitro,reinitiate request,Sara,2011-01-11 16:18:00+01:00
                                            check ticket,100,Ellen,5,Fluxicon Nitro,check ticket,Ellen,2011-01-14 14:33:00+01:00
                                            examine casually,400,Mike,5,Fluxicon Nitro,examine casually,Mike,2011-01-16 15:50:00+01:00
                                            decide,200,Sara,5,Fluxicon Nitro,decide,Sara,2011-01-19 11:18:00+01:00
                                            reinitiate request,200,Sara,5,Fluxicon Nitro,reinitiate request,Sara,2011-01-20 12:48:00+01:00
                                            examine casually,400,Sue,5,Fluxicon Nitro,examine casually,Sue,2011-01-21 09:06:00+01:00
                                            check ticket,100,Pete,5,Fluxicon Nitro,check ticket,Pete,2011-01-21 11:34:00+01:00
                                            decide,200,Sara,5,Fluxicon Nitro,decide,Sara,2011-01-23 13:12:00+01:00
                                            reject request,200,Mike,5,Fluxicon Nitro,reject request,Mike,2011-01-24 14:56:00+01:00
                                            register request,50,Pete,4,Fluxicon Nitro,register request,Pete,2011-01-06 15:02:00+01:00
                                            check ticket,100,Mike,4,Fluxicon Nitro,check ticket,Mike,2011-01-07 12:06:00+01:00
                                            examine thoroughly,400,Sean,4,Fluxicon Nitro,examine thoroughly,Sean,2011-01-08 14:43:00+01:00
                                            decide,200,Sara,4,Fluxicon Nitro,decide,Sara,2011-01-09 12:02:00+01:00
                                            reject request,200,Ellen,4,Fluxicon Nitro,reject request,Ellen,2011-01-12 15:44:00+01:00`);
                                            
                                            const variantInfo = await MiningBroker.Default.getVariantInfo(a.logId);
                                          alert(variantInfo)

                                          /*   const issues = await JiraBroker.Default.getIssues('CEL');
                                            issues.forEach(issue => {
                                                console.log(issue.fields.summary)
                                            })
                                            alert(JSON.stringify(issues)) */
/* 
                                            const files = await GooleDriveBroker.Default
                                            .listFiles();
                                            console.log(files)
 */
                                           /*  GooleDriveBroker.Default.getUserToken().then(async (token)=> {
                                                console.log(token)
                                              
                                            }) */

                                           /*  const popup = window.open("/v1/service/google", "popup", "popup = true");

                                            const checkPopup = setInterval(() => {
                                                if (popup.window.location.href.includes("CLOSE")) {
                                                    const searchParams = new URLSearchParams(decodeURI(popup.window.location.search));
                                                    if (searchParams.get('CLOSE') === 'true') {
                                                        alert(searchParams.get('access_token'))
                                                        popup.close()
                                                    }
                                                }
                                                if (!popup || !popup.closed) return;
                                                clearInterval(checkPopup);
                                            }, 10); */


                                            /*  const token: any = await QdmsBroker.GetToken('http://93.180.135.42/QDMS/QDMSNET/BSAT/BSATWebapi.asmx?WSDL','qdms', 'qdms24');
                                           const users = await QdmsBroker.Default
                                           .setUrl('http://93.180.135.42/QDMS/QDMSNET/BSAT/BSATWebapi.asmx?WSDL')
                                           .setToken(token.token)
                                           .listUsers();
                
                                            console.log(users)  */

                                            /* const url = 'http://93.180.135.42/QDMS/QDMSNET/BSAT/BSATWebapi.asmx?WSDL';
                                             const token: any = await Services.QDMS.getToken(url, 'qdms', 'qdms24');
                                           const users = await Services.QDMS.listUsers( url , token.token);
                                           console.log(users); */

                                            /*  const broker = new GithubBroker();
                                              broker
                                              .setUserName('bpmgenesis')
                                              .setRepo('tenant-manager')
                                              .setToken(Secrets.GithubToken)
                                              .getService()
                                              .createIssue(
                                              {
                                                  title: 'hehe',
                                                  body:'sdhkfk'
                                              }
                                         ) */
                                            /*  Services.Github.createIssue('bpmgenesis','tenant-manager', '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',
                                                 {
                                                     title: 'hehe',
                                                     body:'sdhkfk'
                                                 }
                                             ); */

                                            /*  createEmailSession({
                                                 email: email,
                                                 password: password
                                             }, () => {
                                                 navigate('/')
                                             }) */


                                        }),
                                    HStack({ alignment: cLeading })(
                                        Text('Reset password')
                                            .fontSize('1.6rem')
                                            .fontFamily('"Graphik Regular", sans-serif')
                                            .cursor('pointer')
                                            .onClick(() => {
                                                alert('')
                                                navigate('/reset-password');
                                                // Services.Accounts.createAnonymousSession().then(account => alert(JSON.stringify(account)));
                                                // navigate('/')
                                            }),
                                        Spacer(),
                                        Text('Sign up')
                                            .fontSize('1.6rem')
                                            .fontFamily('"Graphik Regular", sans-serif')
                                            .cursor('pointer')
                                            .onClick(() => {
                                                // navigate('/signup');
                                                updateName({ name: 'Hans' })

                                            })
                                    )



                                ).height(),
                                /*  isError && Text(error?.message),
                                 isSuccess && UINavigate('/') */
                            ).width().height()
                        ).height().marginTop('10rem'),



                    )
                        .paddingTop('14rem')
                        .paddingRight('calc(50% - 660px)')
                        .paddingLeft('calc(50% - 660px)')
                        .minHeight('100vh'),
                    HStack().height('9rem')
                        .position('absolute')
                        .bottom('0px')
                        .background('linear-gradient(0deg,#fff 42.67%,hsla(0,0%,100%,.8) 60.67%,hsla(0,0%,100%,0))')
                ).background('#7FE8D4')

        )
    }
}

