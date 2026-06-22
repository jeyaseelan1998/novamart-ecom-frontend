import { isEmpty, map, size } from "lodash";

import Text from "../../../components/Text";
import ProductCard from "../shared/ProductCard";
import Spacer from "../../../components/Spacer";
import Center from "../../../components/Center";

import style from "./style.module.css";

export default function ProductsGrid({ list, title }) {
    return (
        <Center>
            {
                title && (
                    <Text tag="h2" className="uppercase bold secondaryFont center" fs={48}>{title}</Text>
                )
            }
            {size(list) > 0 && (
                <>
                    <Spacer size={55} />
                    <ul className={style.productsList}>
                        {
                            map(list, (item, index) => {
                                if (isEmpty(item)) return null;
                                return (
                                    <li key={index} className={style.productsItem}>
                                        <ProductCard {...item} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </>
            )}
        </Center>
    )
}
