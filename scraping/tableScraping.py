# -*- coding: utf-8 -*-
from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')
driver.get('https://www.alimi.or.kr/api/a/vacant/selectApiVacant.do')
table = driver.find_element_by_class_name('search_list')
tableBody = table.find_element_by_tag_name('tbody')
rows = tableBody.find_elements_by_tag_name('tr')
for i in range(4, 14):
    driver.implicitly_wait(1)
    for index, value in enumerate(rows):
        driver.implicitly_wait(1)
        if index != 0:
            address = value.find_elements_by_tag_name('td')[2].text
            pay = value.find_elements_by_tag_name('td')[3].text
            size = value.find_elements_by_tag_name('td')[4].text
            jimk = value.find_elements_by_tag_name('td')[5].text
            print(address, pay, size, jimk)
    element = driver.find_element_by_xpath(
        '//*[@id="list"]/tbody/tr[4]/td/ul/a['+str(i)+']')
    driver.execute_script("arguments[0].click();", element)
