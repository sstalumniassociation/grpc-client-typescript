// @generated by protoc-gen-es v1.7.2
// @generated from file Protos/v1/event.proto (package event.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, FieldMask, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { User } from "./user_pb.js";

/**
 * @generated from message event.v1.Event
 */
export declare class Event extends Message<Event> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: string location = 4;
   */
  location: string;

  /**
   * @generated from field: string badgeImage = 5;
   */
  badgeImage: string;

  /**
   * @generated from field: google.protobuf.Timestamp start_date_time = 6;
   */
  startDateTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_date_time = 7;
   */
  endDateTime?: Timestamp;

  /**
   * @generated from field: repeated event.v1.EventUser attendees = 8;
   */
  attendees: EventUser[];

  constructor(data?: PartialMessage<Event>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.Event";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event;

  static equals(a: Event | PlainMessage<Event> | undefined, b: Event | PlainMessage<Event> | undefined): boolean;
}

/**
 * @generated from message event.v1.EventUser
 */
export declare class EventUser extends Message<EventUser> {
  /**
   * @generated from field: string admission_key = 1;
   */
  admissionKey: string;

  /**
   * @generated from field: user.v1.User user = 2;
   */
  user?: User;

  constructor(data?: PartialMessage<EventUser>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.EventUser";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventUser;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventUser;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventUser;

  static equals(a: EventUser | PlainMessage<EventUser> | undefined, b: EventUser | PlainMessage<EventUser> | undefined): boolean;
}

/**
 * @generated from message event.v1.ListEventsRequest
 */
export declare class ListEventsRequest extends Message<ListEventsRequest> {
  /**
   * @generated from field: int32 page_size = 1;
   */
  pageSize: number;

  /**
   * @generated from field: string page_token = 2;
   */
  pageToken: string;

  constructor(data?: PartialMessage<ListEventsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.ListEventsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListEventsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListEventsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListEventsRequest;

  static equals(a: ListEventsRequest | PlainMessage<ListEventsRequest> | undefined, b: ListEventsRequest | PlainMessage<ListEventsRequest> | undefined): boolean;
}

/**
 * @generated from message event.v1.ListEventsResponse
 */
export declare class ListEventsResponse extends Message<ListEventsResponse> {
  /**
   * @generated from field: repeated event.v1.Event events = 1;
   */
  events: Event[];

  constructor(data?: PartialMessage<ListEventsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.ListEventsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListEventsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListEventsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListEventsResponse;

  static equals(a: ListEventsResponse | PlainMessage<ListEventsResponse> | undefined, b: ListEventsResponse | PlainMessage<ListEventsResponse> | undefined): boolean;
}

/**
 * @generated from message event.v1.GetEventRequest
 */
export declare class GetEventRequest extends Message<GetEventRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<GetEventRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.GetEventRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEventRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEventRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEventRequest;

  static equals(a: GetEventRequest | PlainMessage<GetEventRequest> | undefined, b: GetEventRequest | PlainMessage<GetEventRequest> | undefined): boolean;
}

/**
 * @generated from message event.v1.GetAdmissionRequest
 */
export declare class GetAdmissionRequest extends Message<GetAdmissionRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<GetAdmissionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.GetAdmissionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAdmissionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAdmissionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAdmissionRequest;

  static equals(a: GetAdmissionRequest | PlainMessage<GetAdmissionRequest> | undefined, b: GetAdmissionRequest | PlainMessage<GetAdmissionRequest> | undefined): boolean;
}

/**
 * @generated from message event.v1.CreateEventRequest
 */
export declare class CreateEventRequest extends Message<CreateEventRequest> {
  /**
   * @generated from field: event.v1.Event event = 1;
   */
  event?: Event;

  constructor(data?: PartialMessage<CreateEventRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.CreateEventRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateEventRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateEventRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateEventRequest;

  static equals(a: CreateEventRequest | PlainMessage<CreateEventRequest> | undefined, b: CreateEventRequest | PlainMessage<CreateEventRequest> | undefined): boolean;
}

/**
 * @generated from message event.v1.UpdateEventRequest
 */
export declare class UpdateEventRequest extends Message<UpdateEventRequest> {
  /**
   * @generated from field: event.v1.Event event = 1;
   */
  event?: Event;

  /**
   * @generated from field: google.protobuf.FieldMask update_mask = 2;
   */
  updateMask?: FieldMask;

  constructor(data?: PartialMessage<UpdateEventRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.UpdateEventRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateEventRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateEventRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateEventRequest;

  static equals(a: UpdateEventRequest | PlainMessage<UpdateEventRequest> | undefined, b: UpdateEventRequest | PlainMessage<UpdateEventRequest> | undefined): boolean;
}

/**
 * @generated from message event.v1.DeleteEventRequest
 */
export declare class DeleteEventRequest extends Message<DeleteEventRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<DeleteEventRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.DeleteEventRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteEventRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteEventRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteEventRequest;

  static equals(a: DeleteEventRequest | PlainMessage<DeleteEventRequest> | undefined, b: DeleteEventRequest | PlainMessage<DeleteEventRequest> | undefined): boolean;
}

/**
 * @generated from message event.v1.AddAttendeeRequest
 */
export declare class AddAttendeeRequest extends Message<AddAttendeeRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * ID of the user
   *
   * @generated from field: string user = 2;
   */
  user: string;

  constructor(data?: PartialMessage<AddAttendeeRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.AddAttendeeRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddAttendeeRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddAttendeeRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddAttendeeRequest;

  static equals(a: AddAttendeeRequest | PlainMessage<AddAttendeeRequest> | undefined, b: AddAttendeeRequest | PlainMessage<AddAttendeeRequest> | undefined): boolean;
}

/**
 * @generated from message event.v1.BatchAddAttendeesRequest
 */
export declare class BatchAddAttendeesRequest extends Message<BatchAddAttendeesRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * ID of the users
   *
   * @generated from field: repeated string users = 2;
   */
  users: string[];

  constructor(data?: PartialMessage<BatchAddAttendeesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "event.v1.BatchAddAttendeesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BatchAddAttendeesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BatchAddAttendeesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BatchAddAttendeesRequest;

  static equals(a: BatchAddAttendeesRequest | PlainMessage<BatchAddAttendeesRequest> | undefined, b: BatchAddAttendeesRequest | PlainMessage<BatchAddAttendeesRequest> | undefined): boolean;
}

