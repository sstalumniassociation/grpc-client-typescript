// @generated by protoc-gen-es v1.7.2
// @generated from file Protos/v1/auth.proto (package auth.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message auth.v1.VerifyUserRequest
 */
export declare class VerifyUserRequest extends Message<VerifyUserRequest> {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  constructor(data?: PartialMessage<VerifyUserRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "auth.v1.VerifyUserRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyUserRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyUserRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyUserRequest;

  static equals(a: VerifyUserRequest | PlainMessage<VerifyUserRequest> | undefined, b: VerifyUserRequest | PlainMessage<VerifyUserRequest> | undefined): boolean;
}

/**
 * @generated from message auth.v1.VerifyUserResponse
 */
export declare class VerifyUserResponse extends Message<VerifyUserResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: bool linked = 2;
   */
  linked: boolean;

  constructor(data?: PartialMessage<VerifyUserResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "auth.v1.VerifyUserResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyUserResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyUserResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyUserResponse;

  static equals(a: VerifyUserResponse | PlainMessage<VerifyUserResponse> | undefined, b: VerifyUserResponse | PlainMessage<VerifyUserResponse> | undefined): boolean;
}

/**
 * @generated from message auth.v1.WhoAmIRequest
 */
export declare class WhoAmIRequest extends Message<WhoAmIRequest> {
  constructor(data?: PartialMessage<WhoAmIRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "auth.v1.WhoAmIRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WhoAmIRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WhoAmIRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WhoAmIRequest;

  static equals(a: WhoAmIRequest | PlainMessage<WhoAmIRequest> | undefined, b: WhoAmIRequest | PlainMessage<WhoAmIRequest> | undefined): boolean;
}

/**
 * @generated from message auth.v1.WhoAmIResponse
 */
export declare class WhoAmIResponse extends Message<WhoAmIResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<WhoAmIResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "auth.v1.WhoAmIResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WhoAmIResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WhoAmIResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WhoAmIResponse;

  static equals(a: WhoAmIResponse | PlainMessage<WhoAmIResponse> | undefined, b: WhoAmIResponse | PlainMessage<WhoAmIResponse> | undefined): boolean;
}

