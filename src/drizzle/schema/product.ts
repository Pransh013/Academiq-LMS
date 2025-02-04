import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../schemaHelper";
import { CourseProductTable } from "./courseProduct";

export const productStatuses = ["private", "public"] as const;
export type ProductStatus = (typeof productStatuses)[number];
export const productStatusEnum = pgEnum("product_status", productStatuses);

export const ProductTable = pgTable("products", {
  id: id,
  name: text().notNull(),
  description: text().notNull(),
  imageUrl: text().notNull(),
  priceInRupees: integer().notNull(),
  status: productStatusEnum().notNull().default("private"),
  createdAt: createdAt,
  updatedAt: updatedAt,
});

export const ProductRelationships = relations(ProductTable, ({ many }) => ({
  courseProducts: many(CourseProductTable),
}));
