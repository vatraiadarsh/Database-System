import json


class Base(dict):
    fields = dict()

    def set(self, key, value):
        self[key] = value

    def get(self, key):
        if key in self:
            return self[key]
        else:
            return None

    def setFromDict(self, doc):
        for key, value in self.fields.items():
            if key in doc:
                self[key] = doc[key]

    def setFromJson(self, jsonDoc):
        doc = json.loads(jsonDoc)
        self.setFromDict(doc)

    def __init__(self, doc=None):
        if doc:
            for key, value in self.fields.items():
                self[key] = value
            if isinstance(doc, dict):
                self.setFromDict(doc)
            elif isinstance(doc, str):
                self.setFromJson(doc)

    def toJson(self, filtered=[]):
        jsonDoc = dict()
        for k, v in self.items():
            if k in filtered:
                pass
            elif k == '_id':
                jsonDoc[k] = str(v)
            else:
                jsonDoc[k] = v

        return json.dumps(jsonDoc)
