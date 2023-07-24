import { plainToClass, plainToClassFromExist, instanceToPlain, plainToInstance } from "class-transformer";
import type { ClassConstructor } from "class-transformer/types/interfaces";
import { PageDataModel } from "@/src/core/app/data/models/page_data_model";
import type { DataModel } from "../interfaces/data_model";
import type { ClassTransformOptions } from "class-transformer/types/interfaces";

const options: ClassTransformOptions = { excludeExtraneousValues: true };

export const fromJson = <T = never, U extends T = T>(model: ClassConstructor<U>, json: Record<string, unknown>): U =>
  plainToClass(model, json, { excludeExtraneousValues: true }) as U;

export const fromJsonPage = <DataType extends DataModel<DomainType>, DomainType>(model: ClassConstructor<DataType>, json: Record<string, unknown>) =>
  plainToClassFromExist(new PageDataModel<DataType, DomainType>(model), json, { excludeExtraneousValues: true });

export function toData<T>(object: T) {
    return instanceToPlain(object, options);
}

export function toDomain<T, V>(cls: ClassConstructor<T>, plain: V) {
    return plainToInstance(cls, plain, options);
}

export function copyClass<T, V>(cls: ClassConstructor<T>, object: V) {
    return toDomain(cls, toData(object));
}

export function listToDomain<T, V>(cls: ClassConstructor<T>, plain: V[]) {
    return plain.map((p) => toDomain(cls, p));
}
